import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
    width: '20vw',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  backButton: {
    marginRight: theme.spacing(4),
  },
  instructions: {
    fontSize: theme.typography.h4.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))

export default useStyles
