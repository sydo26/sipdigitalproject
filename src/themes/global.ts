import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background.primary};
    font-family: ${({ theme }) => theme.font};
  }

  .secondary-background {
    background-color: ${({ theme }) => theme.background.secondary}
  }

  .text {
    color: ${({ theme }) => theme.text};
  }

  button.primary {
    background-color: ${({ theme }) => theme.button.primary};
  }

  button.secondary {
    background-color: ${({ theme }) => theme.button.secondary};
  }

  button.primary.outline {
    background-color: transparent !important;
    border-color: ${({ theme }) => theme.button.primary};
  }

  button.secondary.outline {
    background-color: transparent !important;
    border-color: ${({ theme }) => theme.button.secondary};
  }

  .input {
    border-color: ${({ theme }) => theme.input.border};
    color: ${({ theme }) => theme.text};
  }
`
