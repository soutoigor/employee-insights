import React from 'react'
import {
  Grid,
  Typography,
  Hidden,
} from '@material-ui/core'
import logo from '../../assets/logo.svg'
import Watermark from '../../components/Watermark'
import BlueCard from '../../components/BlueCard'
import LoginForm from '../../components/LoginForm'
import useStyles from './styles'

const Login = () => {
  const classes = useStyles()

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
          <LoginForm customClass={classes.formContainer} />
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

export default Login
