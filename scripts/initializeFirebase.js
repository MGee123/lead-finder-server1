import * as firebase from 'firebase'

// Initialize Firebase
export const config = {
  apiKey: 'AIzaSyBMkg8RTS8ddq6ySjsU_ElafkdoriCZfEA',
  authDomain: 'lead-finder-dev.firebaseapp.com',
  databaseURL: 'https://lead-finder-dev.firebaseio.com',
  projectId: 'lead-finder-dev',
  storageBucket: 'lead-finder-dev.appspot.com',
  messagingSenderId: '370651581120'
}

export const initialize = () => { firebase.initializeApp(config) }
export default initialize

