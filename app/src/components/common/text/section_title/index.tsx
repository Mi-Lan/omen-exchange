import React, { HTMLAttributes } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonCircle } from '../../../button'
import { IconArrowBack } from '../../icons/IconArrowBack'

import CheckSVG from './img/dxdao-verified.svg'

const CheckMark = styled.img`
  margin-left: 6px;
`

export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 18px auto;
  max-width: 100%;
  width: ${props => props.theme.mainContainer.maxWidth};
`

const Text = styled.h1<{ backButtonEnabled: boolean; textAlign: TextAlign }>`
  color: #333;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  padding-left: 25px;
  padding-right: ${props =>
    props.backButtonEnabled ? `${parseInt(props.theme.buttonCircle.dimensions + 25)}px` : '25px'};
  text-align: ${props => props.textAlign};
`

interface Props extends HTMLAttributes<HTMLDivElement>, RouteComponentProps<any> {
  goBack?: boolean
  textAlign?: TextAlign
  title: string
  verified?: Maybe<boolean>
}

export const SectionTitleWrapper: React.FC<Props> = (props: Props) => {
  const { textAlign = TextAlign.center, goBack = '', verified, title, ...restProps } = props
  const enableGoBack = goBack === true

  return (
    <Wrapper {...restProps}>
      {enableGoBack && (
        <ButtonCircle onClick={() => (props.history.length > 2 ? props.history.goBack() : props.history.replace('/'))}>
          <IconArrowBack />
        </ButtonCircle>
      )}
      <Text backButtonEnabled={enableGoBack} className="titleText" textAlign={textAlign}>
        {title}
        {verified && <CheckMark alt="" src={CheckSVG} />}
      </Text>
    </Wrapper>
  )
}

export const SectionTitle = withRouter(SectionTitleWrapper)
