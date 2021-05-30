import React from 'react'
import { Box } from '@material-ui/core'
import logo from '../../assets/logo.png'
import useStyles from './styles'

const Watermark = () => {
  const classes = useStyles()

  return (
    <Box className={classes.watermark}>
      <img src={logo} alt="Logo watermark" className={classes.watermarkLogo} />
    </Box>
  )
}

export default Watermark
