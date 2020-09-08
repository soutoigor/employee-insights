import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

const NumberField = ({ result, handleAnswer }) => {
  const handleChange = (event) => {
    handleAnswer(event.target.value)
  }

  return (
    <TextField
      type="number"
      label="Insira o número"
      variant="outlined"
      onChange={handleChange}
      defaultValue={result}
    />
  )
}

NumberField.defaultProps = {
  result: '',
}

NumberField.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NumberField
