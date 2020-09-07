import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  blueCard: {
    backgroundColor: theme.palette.primary.main,
    height: '200vh',
    width: '70vw',
    position: 'fixed',
    transform: 'rotate(-10deg)',
    right: -200,
    top: -200,
    zIndex: -1,
  },
}))

export default useStyles
