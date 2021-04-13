import styled from 'styled-components'

const DIV = styled.div`
  display: flex;
  width: 100%;
  heigth: auto;
  margin: 0 auto;

  /* 1520px */
  @media screen and (min-width: 1520px) {
    & {
      max-width: 1520px;
    }
  }

  /* 880px */
  @media screen and (max-width: 1520px) {
    & {
      max-width: 880px;
    }
  }

  /* 480px */
  @media screen and (max-width: 880px) {
    & {
      max-width: 480px;
    }
  }

  /* 380px */
  @media screen and (max-width: 480px) {
    & {
      max-width: 380px;
    }
  }
`

export { DIV }
