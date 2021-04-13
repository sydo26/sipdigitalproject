import { WrapperComponentProps } from 'props'
import * as React from 'react'

import { DIV } from './style'

const Wrapper: React.FC<WrapperComponentProps> = ({ children }) => {
  return <DIV>{children}</DIV>
}

export default Wrapper
