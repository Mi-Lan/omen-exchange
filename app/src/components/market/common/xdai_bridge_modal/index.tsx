import { BigNumber } from 'ethers/utils'
import React, { useState } from 'react'
import styled from 'styled-components'

import { useConnectedWeb3Context } from '../../../../hooks'
import { useXdaiBridge } from '../../../../hooks/useXdaiBridge'
import { formatBigNumber } from '../../../../util/tools'
import { Button } from '../../../button/button'
import { ButtonRound } from '../../../button/button_round'
import { ButtonType } from '../../../button/button_styling_types'
import { BigNumberInput, TextfieldCustomPlaceholder } from '../../../common'
import { BigNumberInputReturn } from '../../../common/form/big_number_input'
import { XDaiStake } from '../../../common/icons/currencies/XDaiStake'

import { TransactionState } from './bridge_transaction_state'

interface Prop {
  open: boolean
}

const BridgeWrapper = styled(ButtonRound)<{ isOpen: boolean }>`
  ${props => (!props.isOpen ? 'display:none' : 'display: flow-root')};
  position: absolute;
  top: calc(100% + 8px);
  width: 207.27px;
  right: 207.27px;
  z-index: 0;
  height: fit-content;
  box-shadow: ${props => props.theme.dropdown.dropdownItems.boxShadow};
  padding: 17px 20px;
  @media only screen and (max-width: ${props => props.theme.themeBreakPoints.md}) {
    top: calc(100% + 54px);
    width: calc(100% - 20px);
    right: 10px;
  }
`

const ChainText = styled.div`
  text-align: start;
  width: 50%;
`
const BalanceText = styled.div`
  text-align: end;
  width: 50%;
  color: ${({ theme }) => theme.colors.clickable};
`
const MainnetWrapper = styled.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
`
const XDaiWrapper = styled.div`
  width: 100%;
  display: flex;
`
const BalanceWrapper = styled.div<{ isOpen: boolean }>`
  flex-wrap: wrap;
  ${props => (!props.isOpen ? 'display:none' : 'display: flow-root')};
`

const TextFieldCustomPlace = styled(TextfieldCustomPlaceholder)`
  margin-top: 20px;
  span {
    margin-right: 0px;
  }
`

const TransferButton = styled(ButtonRound)`
  margin-top: 12px;
  width: 100%;
`
const ClaimButton = styled(Button)`
  margin-top: 12px;
  width: 100%;
  font-weight: 500;
`
const PoweredByStakeWrapper = styled.div`
  display: flex;

  margin-top: 16px;
  margin-left: 6px;
`
const StakeText = styled.div`
  margin-left: 8px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.clickable};
`

export const XdaiBridgeTransfer = (props: Prop) => {
  const [amountToDisplay, setAmountToDisplay] = useState<string>('')
  const [amount, setAmount] = useState<BigNumber>(new BigNumber(0))

  const { networkId } = useConnectedWeb3Context()

  const [transferState, setTransferState] = useState<boolean>(false)

  const {
    claimLatestToken,
    claimState,
    daiBalance,
    isClaimStateTransaction,
    transactionHash,
    transactionStep,
    transferFunction,
    unclaimedAmount,
    xDaiBalance,
  } = useXdaiBridge(amount)

  return (
    <>
      <BridgeWrapper isOpen={props.open}>
        <BalanceWrapper isOpen={!transferState}>
          <MainnetWrapper>
            <ChainText>Mainnet</ChainText>
            <BalanceText
              onClick={() => {
                setAmount(daiBalance)
                setAmountToDisplay(formatBigNumber(daiBalance, 18))
              }}
            >
              {formatBigNumber(daiBalance, 18)} DAI
            </BalanceText>
          </MainnetWrapper>
          <XDaiWrapper>
            <ChainText>xDai Chain</ChainText>
            <BalanceText
              onClick={() => {
                setAmount(xDaiBalance)
                setAmountToDisplay(formatBigNumber(xDaiBalance, 18))
              }}
            >
              {formatBigNumber(xDaiBalance, 18)} XDAI
            </BalanceText>
          </XDaiWrapper>

          <TextFieldCustomPlace
            formField={
              <BigNumberInput
                decimals={18}
                name="amounts"
                onChange={(e: BigNumberInputReturn) => {
                  setAmount(e.value)
                  setAmountToDisplay('')
                }}
                style={{ width: 0 }}
                value={amount}
                valueToDisplay={amountToDisplay}
              />
            }
            symbol={networkId === 1 ? 'DAI' : 'XDAI'}
          />

          <TransferButton
            onClick={() => {
              setTransferState(!transferState)
              transferFunction()
            }}
          >
            Transfer
          </TransferButton>
          {claimState && networkId === 1 && (
            <ClaimButton
              buttonType={ButtonType.primary}
              onClick={() => {
                setTransferState(!transferState)
                setAmount(unclaimedAmount)
                claimLatestToken()
              }}
            >
              Claim {formatBigNumber(unclaimedAmount, 18, 2)} DAI
            </ClaimButton>
          )}
          <PoweredByStakeWrapper>
            <XDaiStake />
            <StakeText>Powered by STAKE Bridge</StakeText>
          </PoweredByStakeWrapper>
        </BalanceWrapper>
        {transferState && (
          <TransactionState
            amountToTransfer={amount}
            isClaimTransaction={isClaimStateTransaction}
            network={networkId}
            state={transactionStep}
            transactionHash={transactionHash}
            transactionModalVisibility={setTransferState}
          />
        )}
      </BridgeWrapper>
    </>
  )
}