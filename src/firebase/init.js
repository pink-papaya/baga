import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyAq30UAmAcfuaAHcHl8lrcllBGFVI_4n0c',
  authDomain: 'baga-d5af7.firebaseapp.com',
  databaseURL: 'https://baga-d5af7.firebaseio.com',
  projectId: 'baga-d5af7',
  storageBucket: '',
  messagingSenderId: '1062440756250',
  appId: '1:1062440756250:web:64de1297a7b9bfc4'
}

firebase.initializeApp(config)
