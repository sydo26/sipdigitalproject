import React from 'react'
import { Route, Switch } from 'react-router'
import EcommerceScreen from '../screens/EcommerceScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/ecommerce" exact component={EcommerceScreen} />
      <Route path="/" exact component={HomeScreen} />
      <Route>404</Route>
    </Switch>
  )
}

export default MainRouter
