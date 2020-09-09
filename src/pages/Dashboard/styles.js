import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(12),
    width: '100%',
    overflowX: 'auto',
  },
  pageTitle: {
    fontSize: theme.typography.h2.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.3rem',
    },
  },
  subTitle: {
    fontSize: theme.typography.h3.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
}))

export default useStyles
