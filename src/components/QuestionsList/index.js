import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Button,
} from '@material-ui/core'
import {
  isEmpty,
  map,
  filter,
  not,
  includes,
  lte,
  gte,
  and,
} from 'ramda'
import moment from 'moment'
import { firestore } from '../../lib/firebase'
import useStyles from './styles'
import { AuthContext } from '../../contexts/Auth'
import QuestionsContainer from '../QuestionsContainer'

const QuestionsList = () => {
  const { currentUser } = useContext(AuthContext)
  const [rows, setRows] = useState([])
  const [isAnswering, setIsAnswering] = useState(false)
  const [selectedQuestionary, setSelectedQuestionary] = useState({})
  const classes = useStyles()

  const getQuestions = useCallback(() => {
    const now = moment().unix()
    firestore
      .collection('questionaries')
      .get()
      .then(({ docs }) => {
        const formattedQuestions = map(
          (questionary) => {
            const question = {
              ...questionary.data(),
              id: questionary.id,
            }
            questionary
              .data()
              .questions
              .get()
              .then((res) => {
                question.questions = res.data().questions
              })
            return question
          },
          filter(
            (questionary) => and(
              not(includes(currentUser.uid, questionary.data().answeredBy)),
              and(
                gte(now, questionary.data().startDate),
                lte(now, questionary.data().endDate),
              ),
            ),
            docs,
          ),
        )
        setRows(formattedQuestions)
      })
  }, [currentUser.uid])

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

  const formatDate = (date) => moment.unix(date).format('DD/MM/YYYY')

  const openQuestions = (questionary) => {
    setSelectedQuestionary(questionary)
    setIsAnswering(true)
  }

  const handleCloseDialog = () => {
    setIsAnswering(false)
  }

  const buildTableRow = () => (
    map(
      (row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>{formatDate(row.startDate)}</TableCell>
          <TableCell>{formatDate(row.endDate)}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              onClick={() => openQuestions(row)}
              color="primary"
              size="small"
            >
              Responder
            </Button>
          </TableCell>
        </TableRow>
      ),
      rows,
    )
  )

  return (
    isEmpty(rows)
      ? (
        <Typography variant="h5" component="h5">
          Não há questões para responder
        </Typography>
      )
      : (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Início</TableCell>
                  <TableCell>Fim</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {buildTableRow()}
              </TableBody>
            </Table>
          </TableContainer>
          {
            not(isEmpty(selectedQuestionary)) && (
            <QuestionsContainer
              open={isAnswering}
              handleClose={handleCloseDialog}
              questionary={selectedQuestionary}
            />
            )
          }
        </>
      )
  )
}

export default QuestionsList
