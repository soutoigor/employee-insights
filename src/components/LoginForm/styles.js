import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}))

export default useStyles
