import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
  formContainer: {
    width: '30vw',
    minHeight: '50vh',
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      maxWidth: '30rem',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100vw',
      maxWidth: '30rem',
    },
  },
  titleLogo: {
    [theme.breakpoints.down('sm')]: {
      width: '4rem',
    },
  },
  titleText: {
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'wrap',
      width: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}))

export default useStyles
