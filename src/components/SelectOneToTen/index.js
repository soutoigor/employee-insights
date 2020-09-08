import React from 'react'
import { range, map } from 'ramda'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import PropTypes from 'prop-types'

const SelectOneToTen = ({ result, handleAnswer }) => {
  const options = range(1, 11)

  const handleChange = (_, newValue) => {
    handleAnswer(newValue)
  }

  const buttonOptions = map(
    (number) => (
      <ToggleButton
        key={number}
        value={number}
      >
        {number}
      </ToggleButton>
    ),
    options,
  )

  return (
    <ToggleButtonGroup
      size="large"
      value={result}
      exclusive
      onChange={handleChange}
    >
      {buttonOptions}
    </ToggleButtonGroup>
  )
}

SelectOneToTen.defaultProps = {
  result: '',
}

SelectOneToTen.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SelectOneToTen
