import * as React from 'react'

import { darkSchema, lightSchema } from './themes'
import useDarkMode from 'use-dark-mode'

import './global.css'

import { ThemeProvider } from 'styled-components'
import MainRouter from './routes/main'
import { GlobalStyles } from './themes/global'
import WebFont from 'webfontloader'

function App() {
  const { value } = useDarkMode(false)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:400,500,700,900'],
      },
    })
    setLoading(false)

    return () => {
      setLoading(true)
    }
  })

  return (
    <ThemeProvider theme={value ? darkSchema : lightSchema}>
      <GlobalStyles />
      {!loading && <MainRouter />}
    </ThemeProvider>
  )
}

export default App
