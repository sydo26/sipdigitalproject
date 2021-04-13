import React from 'react'
import { Route, Switch } from 'react-router'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/login" exact>
        <LoginScreen />
      </Route>
      <Route path="/register" exact>
        <RegisterScreen />
      </Route>

      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="*">404</Route>
    </Switch>
  )
}

export default MainRouter
