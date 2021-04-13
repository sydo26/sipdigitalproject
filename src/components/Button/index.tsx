import { ButtonComponentProps } from 'props'
import * as React from 'react'

import { BUTTON } from './style'

const Button: React.FC<ButtonComponentProps> = ({
  text,
  fullwidth = false,
  type = 'primary',
  appearance = 'filled',
  ...rest
}) => {
  return (
    <BUTTON
      className={type + ' ' + appearance}
      style={{ width: fullwidth ? '100%' : 'auto' }}
      {...rest}
    >
      {text}
    </BUTTON>
  )
}

export default Button
