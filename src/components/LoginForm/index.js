import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Snackbar,
  TextField,
} from '@material-ui/core'
import { email, password } from '../../utils/validations'
import PasswordField from '../PasswordField'
import { auth } from '../../lib/firebase'

const LoginForm = () => {
  const history = useHistory()
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false)

  const validationSchema = yup.object().shape({
    email,
    password,
  })

  const toggleSnackbar = () => setIsOpenSnackbar(!isOpenSnackbar)

  const postSession = async (credentials) => {
    try {
      await auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      history.push('/')
    } catch (error) {
      toggleSnackbar()
    }
  }

  return (
    <>
      <Snackbar
        open={isOpenSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={toggleSnackbar}
        message="Credenciais inválidas"
      />
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
    </>
  )
}

export default LoginForm
