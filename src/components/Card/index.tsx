import { CardComponentProps } from 'props'
import * as React from 'react'

import { DIV, HEADER, BODY } from './style'

const Card: React.FC<CardComponentProps> = ({ title, children, ...rest }) => {
  return (
    <DIV {...rest} className="secondary-background">
      <HEADER className="text">{title}</HEADER>
      <BODY>{children}</BODY>
    </DIV>
  )
}

export default Card
