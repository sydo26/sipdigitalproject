import { HomeScreenProps } from 'props'
import * as React from 'react'
import { ReactSVG } from 'react-svg'
import Card from '../components/Card'
import Wrapper from '../components/Wrapper'
import useDarkMode from 'use-dark-mode'
import Button from '../components/Button'
import { useHistory } from 'react-router'

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [loading, setLoading] = React.useState(true)
  const { value } = useDarkMode(false)

  const history = useHistory()

  React.useEffect(() => {
    setLoading(false)

    return () => {
      setLoading(true)
    }
  })

  return !loading ? (
    <Wrapper>
      <Card style={{ marginTop: 40 }} title="Olá, Seja Bem-Vindo">
        <ReactSVG
          style={{ paddingLeft: 120, paddingRight: 120 }}
          className="svg"
          src={
            value
              ? '/assets/images/happy_feeling_dark.svg'
              : '/assets/images/happy_feeling_light.svg'
          }
        />

        <div style={{ marginTop: 40 }}>
          <Button
            onClick={() => history.push('/login')}
            text="Logue-se agora"
            fullwidth
          />
          <Button
            onClick={() => history.push('/register')}
            type="secondary"
            text="Cadastrar-se"
            fullwidth
          />
        </div>
      </Card>
    </Wrapper>
  ) : (
    <></>
  )
}

export default HomeScreen
