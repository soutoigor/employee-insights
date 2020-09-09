import React, {
 useState, useEffect, useCallback,
} from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  CircularProgress,
} from '@material-ui/core'
import {
  countBy,
  filter,
  head,
  isEmpty,
  last,
  equals,
  length,
  lte,
  gte,
  and,
  map,
  or,
  prop,
  propEq,
  toLower,
  toPairs,
  groupBy,
} from 'ramda'
import BarChart from '../BarChart'
import PieChart from '../PieChart'
import { firestore } from '../../lib/firebase'
import dictionary from '../../utils/questionDictionary'
import useStyles from './styles'

const DashboardsContainer = () => {
  const classes = useStyles()
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const loadAnswers = useCallback(() => {
    setIsLoading(true)
    firestore
      .collection('answers')
      .get()
      .then(({ docs }) => {
        const formattedDocs = map((doc) => doc.data(), docs)
        setAnswers(formattedDocs)
        setIsLoading(false)
      })
  }, [setAnswers])

  useEffect(() => {
    loadAnswers()
  }, [loadAnswers])

  const parseValuesToBarChart = (property) => map(
    (item) => ({
      key: head(item),
      value: last(item),
    }),
    toPairs(
      countBy(
        toLower,
        map(
          ({ result }) => result,
          filter(
            propEq('questionId', prop(property, dictionary)),
            answers,
          ),
        ),
      ),
    ),
  )

  const getNPSGroups = (property) => map(
    (group) => ({
      id: head(group),
      key: head(group),
      value: length(last(group)),
    }),
    toPairs(
      groupBy(
        (result) => {
            if (and(gte(result, 1), lte(result, 6))) return 'Detrator'
            if (or(equals(result, 7), equals(result, 8))) return 'Passivo'
            if (or(equals(result, 9), equals(result, 10))) return 'Promotor'
            return ''
        },
        map(
          ({ result }) => result,
          filter(
            propEq('questionId', prop(property, dictionary)),
            answers,
          ),
        ),
      ),
    ),
  )

  const getEmployeesInEnterprise = parseValuesToBarChart('employeesInEnterprise')
  const getEmployeesInTeam = parseValuesToBarChart('employeesInTeam')
  const getEnterpriseSatisfaction = getNPSGroups('enterpriseSatisfaction')
  const getBossRate = getNPSGroups('bossRate')

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Funcionários na empresa" />
          <CardContent className={classes.chartContainer}>
            {
              or(isLoading, isEmpty(getEmployeesInEnterprise))
              ? <CircularProgress />
              : (
                <BarChart
                  data={getEmployeesInEnterprise}
                  xLegend="Funcionários na empresa"
                  yLegend="Respostas"
                />
              )
            }
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Pessoas por equipe" />
          <CardContent className={classes.chartContainer}>
            {
              or(isLoading, isEmpty(getEmployeesInTeam))
              ? <CircularProgress />
              : (
                <BarChart
                  data={getEmployeesInTeam}
                  xLegend="Pessoas por equipe"
                  yLegend="Respostas"
                />
)
            }
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Satisfação com a empresa" />
          <CardContent className={classes.chartContainer}>
            {
              or(isLoading, isEmpty(getEnterpriseSatisfaction))
              ? <CircularProgress />
              : (
                <PieChart
                  data={getEnterpriseSatisfaction}
                />
              )
            }
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Avaliação do chefe" />
          <CardContent className={classes.chartContainer}>
            {
              or(isLoading, isEmpty(getBossRate))
              ? <CircularProgress />
              : (
                <PieChart
                  data={getBossRate}
                />
              )
            }
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DashboardsContainer
