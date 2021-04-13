import { RegisterScreenProps } from 'props'
import * as React from 'react'
import Card from '../components/Card'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import Input from '../components/Input'
import { useHistory } from 'react-router'

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const history = useHistory()

  return (
    <Wrapper>
      <Card style={{ marginTop: 40 }} title="Registre-se agora">
        <div style={{ width: '100%' }}>
          <Input placeholder="ex: sydo26" title="Usuário" />
          <Input placeholder="ex: example@gmail.com" title="E-mail" />
          <Input placeholder="ex: example@gmail.com" title="Confirmar e-mail" />
          <Input placeholder="Uma senha segura" type="password" title="Senha" />
          <Input
            placeholder="Uma senha segura"
            type="password"
            title="Confirmar senha"
          />
          <Button
            onClick={() => history.push('/login')}
            text="Cadastrar agora"
            fullwidth
          />
          <Button
            onClick={() => history.push('/login')}
            appearance="outline"
            type="secondary"
            text="Já possuo uma conta"
            fullwidth
          />
        </div>
      </Card>
    </Wrapper>
  )
}

export default RegisterScreen
