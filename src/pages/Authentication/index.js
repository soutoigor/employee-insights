import React, { useContext } from 'react'
import {
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Watermark from '../../components/Watermark'
import BlueCard from '../../components/BlueCard'
import AuthenticationCard from '../../components/AuthenticationCard'
import useStyles from './styles'
import { AuthContext } from '../../contexts/Auth'

const Authentication = () => {
  const classes = useStyles()
  const { currentUser } = useContext(AuthContext)

  if (currentUser) return <Redirect to="/" />

  return (
    <Grid className={classes.pageContainer}>
      <Grid item className={classes.title} md={4}>
        <Grid item>
          <img src={logo} alt="KPI logo" className={classes.titleLogo} />
        </Grid>
        <Grid item>
          <Typography variant="h1" component="h1" className={classes.titleText}>
            Key People Insights
          </Typography>
        </Grid>
      </Grid>
      <Grid container item alignItems="center" justify="center" md={6}>
        <Grid>
          <AuthenticationCard customClass={classes.formContainer} />
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Watermark />
      </Hidden>
      <Hidden smDown>
        <BlueCard />
      </Hidden>
    </Grid>
  )
}

export default Authentication
