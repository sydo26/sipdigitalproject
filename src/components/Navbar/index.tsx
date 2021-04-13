import { NavbarComponentProps } from 'props'
import * as React from 'react'
import Wrapper from '../Wrapper'

import { DIV } from './style'

const Navbar: React.FC<NavbarComponentProps> = ({ children }) => {
  return (
    <DIV className="secondary-background">
      <Wrapper>{children}</Wrapper>
    </DIV>
  )
}

export default Navbar
