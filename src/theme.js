import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0067AC',
    },
    secondary: {
      main: '#6202EE',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
