import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import PropTypes from 'prop-types'

const SelectEmployees = ({ result, handleAnswer }) => {
  const handleChange = (_, newValue) => {
    handleAnswer(newValue)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Escolha uma opção abaixo:
      </FormLabel>
      <RadioGroup
        name="employees"
        value={result}
        onChange={handleChange}
      >
        <FormControlLabel
          value="1 até 50"
          control={<Radio />}
          label="1 até 50"
        />
        <FormControlLabel
          value="51 até 100"
          control={<Radio />}
          label="51 até 100"
        />
        <FormControlLabel
          value="101 até 200"
          control={<Radio />}
          label="101 até 200"
        />
        <FormControlLabel
          value="201 até 500"
          control={<Radio />}
          label="201 até 500"
        />
        <FormControlLabel
          value="mais de 500"
          control={<Radio />}
          label="mais de 500"
        />
      </RadioGroup>
    </FormControl>
  )
}

SelectEmployees.defaultProps = {
  result: '',
}

SelectEmployees.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
  result: PropTypes.string,
}

export default SelectEmployees
