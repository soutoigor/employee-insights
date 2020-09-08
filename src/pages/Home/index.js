import React from 'react'
import {
  Grid,
  Card,
  Typography,
  CardContent,
} from '@material-ui/core'
import Toolbar from '../../components/Toolbar'
import QuestionsList from '../../components/QuestionsList'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Toolbar />
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12}>
          <Typography component="h1" className={classes.pageTitle}>
            Início
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography component="h2" className={classes.subTitle}>
                    Questionários
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <QuestionsList />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
