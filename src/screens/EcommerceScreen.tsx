import { EcommerceScreenProps } from 'props'
import * as React from 'react'
import Wrapper from '../components/Wrapper'

const EcommerceScreen: React.FC<EcommerceScreenProps> = () => {
  return (
    <Wrapper>
      <h1
        className="text"
        style={{ marginTop: 40, width: '100%', textAlign: 'center' }}
      >
        Aqui seria o Ecommerce
      </h1>
    </Wrapper>
  )
}

export default EcommerceScreen
