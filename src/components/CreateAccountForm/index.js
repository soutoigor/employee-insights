import React, { useState } from 'react'
import {
  FormControl, TextField, Button, Grid, CircularProgress, Snackbar,
} from '@material-ui/core'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import {
  name, email, password, confirm,
} from '../../utils/validations'
import PasswordField from '../PasswordField'
import { auth } from '../../lib/firebase'

const LoginForm = () => {
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  const validationSchema = yup.object().shape({
    name,
    email,
    password,
    confirm,
  })

  const toggleSnackbar = () => setIsOpenSnackbar(!isOpenSnackbar)

  const createAccount = async (form) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(form.email, form.password)
      await user.updateProfile({ displayName: form.name })
      history.push('/')
    } catch (error) {
      const errors = {
        'auth/email-already-in-use': 'Já existe uma conta com este e-mail.',
      }
      toggleSnackbar()
      setErrorMessage(errors[error.code])
    }
  }

  return (
    <>
      <Snackbar
        open={isOpenSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={toggleSnackbar}
        message={errorMessage}
      />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm: '',
        }}
        onSubmit={createAccount}
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
                      label="Nome"
                      type="text"
                      variant="outlined"
                      size="small"
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      helperText={touched.name && errors.name}
                      error={!!(touched.name && errors.name)}
                      value={values.name}
                    />
                  </FormControl>
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
                    <PasswordField
                      label="Confirmar senha"
                      onChange={handleChange('confirm')}
                      onBlur={handleBlur('confirm')}
                      helperText={touched.confirm && errors.confirm}
                      error={!!(touched.confirm && errors.confirm)}
                      value={values.confirm}
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
                      Cadastrar
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
