import Big from 'big.js'
import { Contract, Wallet, ethers, utils } from 'ethers'
import { BigNumber, formatUnits, parseUnits } from 'ethers/utils'

import { roundNumberStringToSignificantDigits } from '../util/tools'
import { Token } from '../util/types'

import { cBATAbi, cDaiAbi, cETHAbi, cUSDCAbi, cUSDTAbi, cWBTCAbi } from './compound_abi'
// use floor as rounding method
Big.RM = 0
const RoundingFactor = 10000

class CompoundService {
  contract: Contract
  signerAddress: Maybe<string>
  provider: any
  exchangeRate: number
  constructor(address: string, symbol: string, provider: any, signerAddress: Maybe<string>) {
    const cTokenABI = CompoundService.getABI(symbol)
    if (signerAddress) {
      const signer: Wallet = provider.getSigner()
      this.contract = new ethers.Contract(address, cTokenABI, provider).connect(signer)
    } else {
      this.contract = new ethers.Contract(address, cTokenABI, provider)
    }
    this.exchangeRate = 0
    this.signerAddress = signerAddress
    this.provider = provider
  }

  init = async () => {
    this.exchangeRate = await this.calculateExchangeRate()
  }

  calculateSupplyRateAPY = async (): Promise<number> => {
    const supplyRate: number = await this.contract.supplyRatePerBlock()
    const ethMantissa = 1e18
    const blocksPerDay = 4 * 60 * 24
    const daysPerYear = 365
    const supplyApy = (Math.pow((supplyRate / ethMantissa) * blocksPerDay + 1, daysPerYear - 1) - 1) * 100
    return supplyApy
  }

  calculateCTokenToBaseExchange = (baseToken: Token, cTokenFunding: BigNumber): BigNumber => {
    const cTokenDecimals = 8
    const bigTen = new Big(10)
    const userCTokenAmount = new Big(formatUnits(cTokenFunding, cTokenDecimals))
    const exchangeRate = new Big(this.exchangeRate)
    const baseTokenDecimals = Number(baseToken.decimals)
    const mantissa = 18 + baseTokenDecimals - cTokenDecimals
    if (exchangeRate.eq(0)) {
      return new BigNumber('0')
    }
    const exp = bigTen.pow(mantissa)
    const oneCTokenInUnderlying = exchangeRate.div(exp)
    const amountUnderlyingTokens = userCTokenAmount.mul(oneCTokenInUnderlying)
    const amountUnderlyingTokensBoundToPrecision = roundNumberStringToSignificantDigits(
      amountUnderlyingTokens.toString(),
      baseTokenDecimals - 4,
    )
    try {
      const underlyingBigNumber = parseUnits(amountUnderlyingTokensBoundToPrecision, baseTokenDecimals)
      return underlyingBigNumber
    } catch (e) {
      const amountUnderlyingTokensNumber = Number(amountUnderlyingTokensBoundToPrecision) * RoundingFactor
      let underlyingBigNumber = parseUnits(amountUnderlyingTokensNumber.toString(), baseTokenDecimals)
      underlyingBigNumber = underlyingBigNumber.div(RoundingFactor)
      return underlyingBigNumber
    }
  }

  calculateBaseToCTokenExchange = (userInputToken: Token, userInputTokenFunding: BigNumber): BigNumber => {
    const cTokenDecimals = 8
    const bigTen = new Big(10)
    const userInputTokenAmount = new Big(formatUnits(userInputTokenFunding, userInputToken.decimals))
    const underlyingDecimals = Number(userInputToken.decimals)
    const exchangeRate = new Big(this.exchangeRate)
    const mantissa = 18 + underlyingDecimals - cTokenDecimals
    const divisor = bigTen.pow(mantissa)
    if (exchangeRate.eq(0)) {
      return new BigNumber('0')
    }
    const oneUnderlyingInCToken = divisor.div(exchangeRate)
    const amountCTokens = userInputTokenAmount.times(oneUnderlyingInCToken)
    const amountCTokensBoundToPrecision = roundNumberStringToSignificantDigits(
      amountCTokens.toString(),
      cTokenDecimals - 2,
    )
    try {
      const amountCTokenBigNumber = parseUnits(amountCTokensBoundToPrecision, cTokenDecimals)
      return amountCTokenBigNumber
    } catch (e) {
      const amountCToken = Number(amountCTokensBoundToPrecision) * RoundingFactor
      let amountCTokenBigNumber = parseUnits(amountCToken.toString(), cTokenDecimals)
      amountCTokenBigNumber = amountCTokenBigNumber.div(RoundingFactor)
      return amountCTokenBigNumber
    }
  }

  calculateExchangeRate = async (): Promise<number> => {
    const exchangeRate = Number(await this.contract.functions.exchangeRateStored())
    return exchangeRate
  }

  static encodeMintTokens = (tokenSymbol: string, amountWei: string): string => {
    if (tokenSymbol.toLowerCase() === 'ceth') {
      const tokenABI = CompoundService.getABI(tokenSymbol)
      const mintInterface = new utils.Interface(tokenABI)
      return mintInterface.functions.mint.encode([])
    } else {
      const tokenABI = CompoundService.getABI(tokenSymbol)
      const mintInterface = new utils.Interface(tokenABI)
      return mintInterface.functions.mint.encode([amountWei])
    }
  }

  static encodeRedeemTokens = (tokenSymbol: string, amountRedeem: string): string => {
    const tokenABI = CompoundService.getABI(tokenSymbol)
    const mintInterface = new utils.Interface(tokenABI)
    return mintInterface.functions.redeem.encode([amountRedeem])
  }

  static encodeApproveUnlimited = (tokenSymbol: string, spenderAccount: string): string => {
    const tokenABI = CompoundService.getABI(tokenSymbol)
    const approveInterface = new utils.Interface(tokenABI)
    return approveInterface.functions.approve.encode([spenderAccount, ethers.constants.MaxUint256])
  }

  static getABI = (symbol: string) => {
    const symbolLowerCase = symbol.toLowerCase()
    switch (symbolLowerCase) {
      case 'cdai':
        return cDaiAbi
      case 'cwbtc':
        return cWBTCAbi
      case 'ceth':
        return cETHAbi
      case 'cbat':
        return cBATAbi
      case 'cusdt':
        return cUSDTAbi
      case 'cusdc':
        return cUSDCAbi
      default:
        return []
    }
  }
}

export { CompoundService }
