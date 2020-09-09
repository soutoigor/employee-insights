import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import PropTypes from 'prop-types'

const SelectEmployeesTeam = ({ result, handleAnswer }) => {
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
          value="1 até 5"
          control={<Radio />}
          label="1 até 5"
        />
        <FormControlLabel
          value="6 até 10"
          control={<Radio />}
          label="6 até 10"
        />
        <FormControlLabel
          value="11 até 20"
          control={<Radio />}
          label="11 até 20"
        />
        <FormControlLabel
          value="20 até 50"
          control={<Radio />}
          label="20 até 50"
        />
        <FormControlLabel
          value="mais de 50"
          control={<Radio />}
          label="mais de 50"
        />
      </RadioGroup>
    </FormControl>
  )
}

SelectEmployeesTeam.defaultProps = {
  result: '',
}

SelectEmployeesTeam.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
  result: PropTypes.string,
}

export default SelectEmployeesTeam
