import { makeStyles } from '@material-ui/core/styles'

const DRAWER_WIDTH = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: '3px 0',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: '50px',
    marginRight: theme.spacing(2),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  toolbarListItem: {
    marginTop: theme.spacing(2),
  },
  toolbarList: {
    color: theme.palette.background.default,
  },
  logoTitle: {
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    },
  },
  userName: {
    fontSize: '1.5rem',
    position: 'absolute',
    right: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logoutButton: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
}))

export default useStyles
