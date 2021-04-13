import { LoginScreenProps } from 'props'
import * as React from 'react'
import Card from '../components/Card'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import Input from '../components/Input'
import { useHistory } from 'react-router'

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const history = useHistory()

  return (
    <Wrapper>
      <Card style={{ marginTop: 40 }} title="Logue-se agora">
        <div>
          <Input placeholder="Usuário ou E-mail" title="Usuário/E-mail" />
          <Input placeholder="Senha" type="password" title="Senha" />
          <Button
            onClick={() => history.push('/ecommerce ')}
            text="Logue-se agora"
            fullwidth
          />
          <Button
            onClick={() => history.push('/register ')}
            appearance="outline"
            type="secondary"
            text="Não possuo uma conta"
            fullwidth
          />
        </div>
      </Card>
    </Wrapper>
  )
}

export default LoginScreen
