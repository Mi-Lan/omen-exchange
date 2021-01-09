import React from 'react'
import styled from 'styled-components'

import { getCTokenForToken } from '../../../../util/tools'
import { IconTick } from '../../../common/icons'
import { CompoundIcon } from '../../../common/icons/currencies/CompoundIcon'

const Wrapper = styled.div`
  border-radius: 4px;
  border: ${({ theme }) => theme.borders.borderLineDisabled};
  padding: 18px 25px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  color: ${props => props.theme.colors.textColorDark};
  font-size: 16px;
  letter-spacing: 0.4px;
  line-height: 1.2;
  margin: 0 0 20px;
  font-weight: 400;
`

const DescriptionWrapper = styled.div`
  align-items: center;
  display: flex;
`

const CheckService = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 3px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ServiceWrapper = styled.div`
  color: ${props => props.theme.colors.textColorLightish};
  font-size: ${props => props.theme.textfield.fontSize};
  letter-spacing: 0.2px;
  line-height: 1.4;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
`

const ServiceIconWrapper = styled.div`
  display: flex;
  padding-right: 16px;
  text-align: center;
  -webkit-box-align: center;
`

const ServiceTextWrapper = styled.div`
  width: 90%;
`

const ServiceCheckWrapper = styled.div`
  width: 10%;
`

const Description = styled.div`
  color: ${props => props.theme.colors.textColorLightish};
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  margin: 0 32px 0 0;
  width: 100%;
`

const ServiceTokenDetails = styled.div`
  width: 100%;
  display: flex;
`

const TextHeading = 'div'
const TextBody = 'div'

export interface AddCompoundServiceProps {
  isServiceChecked: boolean
  toggleServiceCheck?: any
  compoundInterestRate: string
  currentToken: string
}

export const AddCompoundService: React.FC<AddCompoundServiceProps> = (props: AddCompoundServiceProps) => {
  const { compoundInterestRate, currentToken, isServiceChecked, toggleServiceCheck } = props
  let serviceChecked = <IconTick />
  let checkServiceStyle = {
    backgroundColor: '#fff',
  }
  if (!isServiceChecked) {
    serviceChecked = <span />
    checkServiceStyle = {
      backgroundColor: '#7986CB',
    }
  }
  const cTokenSymbol = getCTokenForToken(currentToken)

  return (
    <Wrapper>
      <Title>Recommended Service</Title>
      <DescriptionWrapper>
        <Description>
          <ServiceWrapper>
            <ServiceIconWrapper>
              <CompoundIcon />
            </ServiceIconWrapper>
            <ServiceTokenDetails>
              <ServiceTextWrapper>
                <TextHeading>Compound</TextHeading>
                <TextBody>
                  Convert {currentToken} to {cTokenSymbol} to earn {compoundInterestRate}% interest
                </TextBody>
              </ServiceTextWrapper>
              <ServiceCheckWrapper onClick={toggleServiceCheck}>
                <CheckService style={checkServiceStyle}>{serviceChecked}</CheckService>
              </ServiceCheckWrapper>
            </ServiceTokenDetails>
          </ServiceWrapper>
        </Description>
      </DescriptionWrapper>
    </Wrapper>
  )
}
