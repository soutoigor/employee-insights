import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'

const BlueCard = () => {
  const classes = useStyles()

  return <Box className={classes.blueCard} />
}

export default BlueCard
