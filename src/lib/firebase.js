import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyARTgMJi0OMx13UJFt2C63uqqfN3e3wlAo',
  authDomain: 'kpi-db.firebaseapp.com',
  databaseURL: 'https://kpi-db.firebaseio.com',
  projectId: 'kpi-db',
  appId: '1:279186183623:web:01ccc516130b0ec64775e2',
  measurementId: 'G-3GQ8GQX5X0',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
