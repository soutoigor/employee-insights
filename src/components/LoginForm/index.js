import React, { useState } from 'react'
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  CardActions,
  Typography,
  Grid,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PropTypes from 'prop-types'
import useStyles from './styles'

const LoginForm = ({ customClass }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={`${classes.card} ${customClass}`} elevation={8}>
      <Typography variant="h3" component="h3" align="center">
        Bem-vindo!
      </Typography>
      <CardContent>
        <Grid container direction="column" alignItems="stretch">
          <FormControl margin="normal">
            <TextField
              label="E-mail"
              type="email"
              variant="outlined"
              size="small"
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel margin="dense" variant="outlined" htmlFor="password-field">Senha</InputLabel>
            <OutlinedInput
              id="password-field"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              margin="dense"
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
            />
          </FormControl>
          <FormControl margin="normal">
            <Button variant="contained" color="primary" disableElevation>
              Entrar
            </Button>
          </FormControl>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container direction="column" justify="center" alignItems="stretch">
          <Typography variant="body2" align="center">
            Não possui uma conta?
          </Typography>
          <Button size="large" color="primary">
            Cadastre-se
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}

LoginForm.defaultProps = {
  customClass: '',
}

LoginForm.propTypes = {
  customClass: PropTypes.string,
}

export default LoginForm
