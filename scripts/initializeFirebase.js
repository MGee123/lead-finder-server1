import firebase from 'firebase'
import config from './config'

export const initializeFirebase = () => { firebase.initializeApp(config) }
export default initializeFirebase

