import styled from 'styled-components'

const INPUT = styled.input`
  position: absolute;
  height: auto;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  background-color: transparent;
  font-size: 1rem;
`

const DIV = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin: 6px 0;
`

const LABEL = styled.label`
  position: relative;
  width: 100%;
  text-align: left;
  margin-bottom: 4px;
  font-size: 0.8rem;
`

const WRAPPER = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 6px 0;
  padding: 18px 32px;
  border-bottom: 0.5px solid transparent;
`

export { INPUT, DIV, LABEL, WRAPPER }
