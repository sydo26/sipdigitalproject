import styled from 'styled-components'

const DIV = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  heigth: auto;
  margin: 0 auto;
  border-radius: 10px;
  flex-wrap: wrap;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  /* 1520px */
  @media screen and (min-width: 1520px) {
    & {
      max-width: 500px;
    }
  }

  /* 480px */
  @media screen and (max-width: 768px) {
    & {
      max-width: 480px;
    }
  }

  /* 380px */
  @media screen and (max-width: 414px) {
    & {
      max-width: 380px;
    }
  }
`

const HEADER = styled.h2`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 20px 0;
  text-align: center;
`

const BODY = styled.div`
  display: flex;
  width: 100%;
  heigth: auto;
  margin: 20px 0;
  padding: 0 10%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

export { DIV, HEADER, BODY }
