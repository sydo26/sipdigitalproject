import styled from 'styled-components'

const DIV = styled.div`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;

  & > input:checked + label {
    left: 30px;
  }

  & > input:focus-visible {
    outline: solid 2px white;
  }

  & > input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.98;
    background-color: #f27249;
  }
`

export { DIV }
