import React, { useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { map, equals } from 'ramda'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@material-ui/core'
import {
  Menu,
  ChevronLeft,
  Home,
  PieChart,
  ListAlt,
  TrackChanges,
  Settings,
  ExitToApp,
} from '@material-ui/icons'
import logo from '../../assets/logo.png'
import useStyles from './styles'
import { auth } from '../../lib/firebase'
import { AuthContext } from '../../contexts/Auth'

const MiniDrawer = () => {
  const location = useLocation()
  const history = useHistory()
  const { currentUser } = useContext(AuthContext)
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const logOut = () => {
    auth.signOut()
  }

  const navigateTo = (route) => history.push(route)

  const isActualRoute = (route) => equals(location.pathname, route)

  const buildListItems = () => map(
    ({ label, icon, route }) => (
      <ListItem
        selected={isActualRoute(route)}
        onClick={() => navigateTo(route)}
        button
        key={label}
        className={classes.toolbarListItem}
      >
        <ListItemIcon className={classes.toolbarList}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    ),
    [
      {
        label: 'Início',
        icon: <Home />,
        route: '/',
      },
      {
        label: 'Dashboards',
        icon: <PieChart />,
        route: '/dashboards',
      },
      {
        label: 'Presença',
        icon: <ListAlt />,
        route: '/presence',
      },
      {
        label: 'Objetivos',
        icon: <TrackChanges />,
        route: '/objectives',
      },
      {
        label: 'Configurações',
        icon: <Settings />,
        route: 'settings',
      },
    ],
  )

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={2}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Box className={classes.appBarLogo}>
            <img src={logo} alt="KPI logo" className={classes.logoImage} />
            <Typography variant="h5" noWrap className={classes.logoTitle}>
              Employee Insights
            </Typography>
          </Box>
          <Typography noWrap className={classes.userName}>
            {`Olá, ${currentUser.displayName}!`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.toolbarList}>
          {buildListItems()}
        </List>
        <Box className={classes.logoutButton}>
          <Divider />
          <ListItem
            onClick={logOut}
            button
            className={classes.toolbarList}
          >
            <ListItemIcon className={classes.toolbarList}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </Box>
      </Drawer>
    </>
  )
}

export default MiniDrawer
