import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.error.main,
  },
  errorLabel: {
    color: theme.palette.error.main,
  },
}))

export default useStyles
