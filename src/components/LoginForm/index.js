import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core'
import { email, password } from '../../utils/validations'
import PasswordField from '../PasswordField'

const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email,
    password,
  })

  const postSession = async (credentials) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('logou', credentials)
        resolve()
      }, 1000)
    })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={postSession}
      validationSchema={validationSchema}
    >
      {
          ({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container direction="column">
                <FormControl margin="normal">
                  <TextField
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    size="small"
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    helperText={touched.email && errors.email}
                    error={!!(touched.email && errors.email)}
                    value={values.email}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <PasswordField
                    label="Senha"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    helperText={touched.password && errors.password}
                    error={!!(touched.password && errors.password)}
                    value={values.password}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    disableElevation
                    startIcon={isSubmitting && <CircularProgress size={16} />}
                  >
                    Entrar
                  </Button>
                </FormControl>
              </Grid>
            </form>
          )
        }
    </Formik>
  )
}

export default LoginForm
