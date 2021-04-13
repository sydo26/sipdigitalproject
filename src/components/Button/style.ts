import styled from 'styled-components'

const BUTTON = styled.button`
  position: relative;
  height: auto;
  padding: 12px 32px;
  cursor: pointer;
  margin: 6px 0;

  border-weight: 0.5px;
  border-style: solid;
  border-color: transparent;

  transition: 0.2s filter ease;

  &:hover {
    filter: brightness(1.1) drop-shadow(0 0 8px rgba(144, 158, 255, 0.25));
  }
`

export { BUTTON }
