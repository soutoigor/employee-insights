import React, { useState, useEffect } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { equals } from 'ramda'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'
import CreateAccountForm from '../CreateAccountForm'
import useStyles from './styles'

const AuthenticationCard = ({ customClass }) => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()

  const [cardValues, setCardValues] = useState({})

  useEffect(() => {
    const isCreateAccount = equals(location.pathname, '/create-account')
    const values = isCreateAccount
      ? {
        title: 'Cadastre-se!',
        form: <CreateAccountForm />,
        buttonSubtitle: 'Já possui conta?',
        button: 'Fazer login',
        link: '/login',
      }
      : {
        title: 'Bem-vindo!',
        form: <LoginForm />,
        buttonSubtitle: 'Não possui uma conta?',
        button: 'Cadastre-se',
        link: '/create-account',
      }
    setCardValues(values)
  }, [location.pathname])

  const redirectTo = (route) => history.push(route)

  return (
    <Card className={`${classes.card} ${customClass}`} elevation={8}>
      <Typography className={classes.cardTitle} component="h3">
        {cardValues.title}
      </Typography>
      <CardContent>
        <Grid container direction="column" alignItems="stretch">
          {cardValues.form}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container direction="column" justify="center" alignItems="stretch">
          <Typography variant="body2" align="center">
            {cardValues.buttonSubtitle}
          </Typography>
          <Button
            onClick={() => redirectTo(cardValues.link)}
            size="large"
            color="primary"
          >
            {cardValues.button}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}

AuthenticationCard.defaultProps = {
  customClass: '',
}

AuthenticationCard.propTypes = {
  customClass: PropTypes.string,
}

export default AuthenticationCard
