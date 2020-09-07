import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'
import CreateAccountForm from '../CreateAccountForm'
import useStyles from './styles'

const ManageCardAction = (isCreateAccount) => (
  isCreateAccount
    ? (
      <>
        <Typography variant="body2" align="center">
          Já possui conta?
        </Typography>
        <Button size="large" color="primary">
          Fazer login
        </Button>
      </>
    )
    : (
      <>
        <Typography variant="body2" align="center">
          Não possui uma conta?
        </Typography>
        <Button size="large" color="primary">
          Cadastre-se
        </Button>
      </>
    )
)

const AuthenticationCard = ({ customClass }) => {
  const classes = useStyles()

  const isCreateAccount = true

  return (
    <Card className={`${classes.card} ${customClass}`} elevation={8}>
      <Typography className={classes.cardTitle} component="h3">
        {
          isCreateAccount
            ? 'Cadastre-se'
            : 'Bem-vindo!'
        }
      </Typography>
      <CardContent>
        <Grid container direction="column" alignItems="stretch">
          {
            isCreateAccount
              ? <CreateAccountForm />
              : <LoginForm />
          }
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container direction="column" justify="center" alignItems="stretch">
          <ManageCardAction isCreateAccount={isCreateAccount} />
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
