import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Grid,
  Stepper,
  Typography,
} from '@material-ui/core'
import {
  dec,
  equals,
  propEq,
  isNil,
  isEmpty,
  not,
  path,
  inc,
  reject,
  length,
  map,
  prop,
  filter,
  find,
  and,
} from 'ramda'
import useStyles from './styles'

const QuestionsStepper = ({ questions, handleSave }) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [QuestionComponent, setQuestionComponent] = useState(null)
  const [answers, setAnswers] = useState([])

  const getStepQuestionLabel = (stepIndex) => questions[stepIndex].label

  const importComponent = useCallback(() => lazy(
    () => import(`../${questions[activeStep].component}`)
      .catch(() => <div>Pergunta inválida</div>),
  ), [questions, activeStep])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => inc(prevActiveStep))
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => dec(prevActiveStep))
  }

  const handleAnswer = (answer) => {
    const cleanAnswers = reject((item) => propEq('questionId', questions[activeStep].id, item), answers)
    setAnswers([...cleanAnswers, {
      questionId: questions[activeStep].id,
      result: answer,
    }])
  }

  const shouldDisableNextButton = isEmpty(filter(
    (answer) => and(
      propEq('questionId', path(['id'], questions[activeStep]), answer),
      not(isNil(prop('result', answer))),
    ),
    answers,
  ))

  const getActualAnswerValue = prop('result', find(propEq('questionId', path(['id'], questions[activeStep])), answers))

  const mountStepLabels = map(
    (step) => (
      <Step key={step.id}>
        <StepLabel />
      </Step>
    ),
    questions,
  )

  useEffect(() => {
      const loadedComponent = importComponent()
      setQuestionComponent(loadedComponent)
  }, [activeStep, importComponent])

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {mountStepLabels}
      </Stepper>
      <Grid container justify="center">
        {equals(activeStep, length(questions)) ? (
          <Grid container direction="column" alignItems="center">
            <Typography className={classes.instructions}>
              Questionário respondido!
              <span role="img" aria-label="Viva!">🎉</span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSave(answers)}
            >
              Salvar
            </Button>
          </Grid>
        ) : (
          <Grid container direction="column" alignItems="center">
            <Typography className={classes.instructions}>
              {getStepQuestionLabel(activeStep)}
            </Typography>
            <Suspense fallback={<CircularProgress />}>
              {
                QuestionComponent
                && <QuestionComponent result={getActualAnswerValue} handleAnswer={handleAnswer} />
              }
            </Suspense>
            <div className={classes.buttonsContainer}>
              <Button
                disabled={equals(activeStep, 0)}
                onClick={handleBack}
                className={classes.backButton}
                color="primary"
              >
                Back
              </Button>
              <Button
                disabled={shouldDisableNextButton}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {equals(activeStep, dec(length(questions))) ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

QuestionsStepper.propTypes = {
  questions: PropTypes.instanceOf(Array).isRequired,
  handleSave: PropTypes.func.isRequired,
}

export default QuestionsStepper
