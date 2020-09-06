import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  watermark: {
    zIndex: -1,
    position: 'fixed',
    bottom: -10,
    left: -10,
    opacity: '.15',
    width: '500px',
  },
  watermarkLogo: {
    width: '100%',
  },
})

export default useStyles
