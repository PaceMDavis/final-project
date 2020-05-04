import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import LoginForm from './components/LoginForm'


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component = {LoginForm} />
    </Switch>
  );
};


export default Router