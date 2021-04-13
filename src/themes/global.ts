import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
    color: ${({ theme }) => theme.text} !important;
    background-color: transparent !important;
    border-color: ${({ theme }) => theme.button.primary};
  }

  button.secondary.outline {
    color: ${({ theme }) => theme.text} !important;
    background-color: transparent !important;
    border-color: ${({ theme }) => theme.button.secondary};
  }

  .input {
    color: ${({ theme }) => theme.text};
  }
`
