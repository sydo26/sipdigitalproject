import * as React from 'react'

import { darkSchema, lightSchema } from './themes'
import useDarkMode from 'use-dark-mode'

import './global.css'

import { ThemeProvider } from 'styled-components'
import MainRouter from './routes/main'
import { GlobalStyles } from './themes/global'
import WebFont from 'webfontloader'
import Navbar from './components/Navbar'
import Toggle from './components/Toggle'

function App() {
  const { value, toggle } = useDarkMode(false)
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
      <>
        <Navbar>
          <Toggle checked={value} onChange={toggle} />
        </Navbar>
        {!loading && <MainRouter />}
      </>
    </ThemeProvider>
  )
}

export default App
