import React from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'
import PasswordField from '../PasswordField'

const LoginForm = () => {
  return (
    <>
      <FormControl margin="normal">
        <TextField
          label="E-mail"
          type="email"
          variant="outlined"
          size="small"
        />
      </FormControl>
      <FormControl margin="normal">
        <PasswordField label="Senha" />
      </FormControl>
      <FormControl margin="normal">
        <Button variant="contained" color="primary" disableElevation>
          Entrar
        </Button>
      </FormControl>
    </>
  )
}

export default LoginForm
