import React, { forwardRef, useContext } from 'react'
import {
  Dialog,
  AppBar,
  Toolbar,
  Slide,
  Grid,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import { useHistory } from 'react-router-dom'
import QuestionsStepper from '../QuestionsStepper'
import { firestore } from '../../lib/firebase'
import { AuthContext } from '../../contexts/Auth'
import useStyles from './styles'

const QuestionsContainer = ({
  open,
  handleClose,
  questionary,
}) => {
  const { currentUser } = useContext(AuthContext)
  const history = useHistory()
  const classes = useStyles()

  const formatQuestions = (questions) => JSON.parse(questions)

  const saveAnswers = async (answers) => {
    const questionaryDoc = firestore
      .collection('questionaries')
      .doc(questionary.id)
    const res = await questionaryDoc.get()
    questionaryDoc
      .set({
        answeredBy: [...res.data().answeredBy, currentUser.uid],
      }, { merge: true })
      .then(async () => {
        const promiseAnswers = map(
          (answer) => firestore
            .collection('answers')
            .doc()
            .set(answer),
          answers,
        )
        Promise.all(promiseAnswers)
          .then(() => {
            handleClose()
            history.push('/dashboards')
          })
      })
  }

  const Transition = forwardRef((props, ref) => (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  ))

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {questionary.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <QuestionsStepper
          questions={formatQuestions(questionary.questions)}
          handleSave={saveAnswers}
        />
      </Grid>
    </Dialog>
  )
}

QuestionsContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  questionary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    answeredBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    questions: PropTypes.string.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
  }).isRequired,
}

export default QuestionsContainer
