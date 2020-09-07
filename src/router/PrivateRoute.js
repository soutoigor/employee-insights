import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { not, isNil } from 'ramda'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={
        (routeProps) => (
          not(isNil(currentUser))
            ? <Component {...routeProps} />
            : <Redirect to="/login" />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRoute
