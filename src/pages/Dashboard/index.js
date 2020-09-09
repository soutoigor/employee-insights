import React from 'react'
import {
  Grid,
  Typography,
} from '@material-ui/core'
import Toolbar from '../../components/Toolbar'
import DashboardsContainer from '../../components/DashboardsContainer'
import useStyles from './styles'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <>
      <Toolbar />
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12}>
          <Typography component="h1" className={classes.pageTitle}>
            Painel de controle
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DashboardsContainer />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
