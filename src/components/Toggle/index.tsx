import * as React from 'react'
import { ToggleComponentProps } from 'props'

import { DIV } from './style'

const Toggle: React.FC<ToggleComponentProps> = ({ checked, onChange }) => (
  <DIV>
    <input
      className="toggleInput"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="check"
    />
    <label htmlFor="check" />
  </DIV>
)

export default Toggle
