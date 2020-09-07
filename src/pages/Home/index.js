import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from '../../lib/firebase'

const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>{auth.currentUser.displayName}</h2>
    <Button
      onClick={() => auth.signOut()}
    >
      Logout
    </Button>
  </div>
)

export default Home
