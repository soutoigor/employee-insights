import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import useStyles from './styles'

const PasswordField = (props) => {
  const classes = useStyles()
  const {
    disabled,
    error,
    helperText,
    label,
    onBlur,
    onChange,
    value,
  } = props
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <InputLabel
        margin="dense"
        variant="outlined"
        htmlFor={label}
        className={error ? classes.errorLabel : ''}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id={label}
        label={label}
        type={showPassword ? 'text' : 'password'}
        margin="dense"
        value={value}
        onBlur={onBlur}
        error={error}
        disabled={disabled}
        onChange={onChange}
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
      <FormHelperText
        className={classes.errorMessage}
      >
        {helperText}
      </FormHelperText>
    </>
  )
}

PasswordField.defaultProps = {
  error: '',
  onBlur: () => {},
  disabled: false,
  helperText: '',
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
}

export default PasswordField
