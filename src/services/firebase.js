import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCNTVSdcc1pUOVfVg_8KcI7M184lXctdmE',
  authDomain: 'cropchat-9e767.firebaseapp.com',
  databaseURL: 'https://cropchat-9e767.firebaseio.com',
  projectId: 'cropchat-9e767',
  storageBucket: 'cropchat-9e767.appspot.com',
  messagingSenderId: '400287093964'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
