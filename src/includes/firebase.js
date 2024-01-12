import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDiXwGCZ21TkC4ve2YRNxeWE1PS8ObHdJY',
  authDomain: 'vue-music-ead58.firebaseapp.com',
  projectId: 'vue-music-ead58',
  storageBucket: 'vue-music-ead58.appspot.com',
  appId: '1:178960235551:web:53d6275881e38e6b80a92a'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

// db.enablePersistence().catch((error) => {
//   console.log('Firebase persistance Error ' + error.code)
// })

const commentsCollection = db.collection('comments')
const songsCollection = db.collection('songs')
const usersCollection = db.collection('users')

export { auth, db, storage, commentsCollection, songsCollection, usersCollection }
