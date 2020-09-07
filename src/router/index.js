import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
import Authentication from '../pages/Authentication'
import { AuthProvider } from '../contexts/Auth'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path="/login" component={Authentication} />
        <Route path="/create-account" component={Authentication} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  </AuthProvider>
)

export default AppRouter
