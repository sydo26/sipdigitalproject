import { InputComponentProps } from 'props'
import * as React from 'react'

import { INPUT, DIV, LABEL, WRAPPER } from './style'

const Input: React.FC<InputComponentProps> = ({ title = '', ...rest }) => {
  return (
    <DIV>
      <LABEL className="text">{title}</LABEL>
      <WRAPPER className="input">
        <INPUT className="text" {...rest} />
      </WRAPPER>
    </DIV>
  )
}

export default Input
