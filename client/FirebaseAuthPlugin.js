import store from './store'
import Firebase from 'firebase'

const config = {
  apiKey: <YOUR_API_KEY>
  authDomain: <YOUR_DOMAIN>,
  databaseURL: <DB_URL>,
  projectId: <PROJECT_ID>,
  storageBucket: <STORAGE_BUCKET>,
  messagingSenderId: <MESSAGING_SENDER_ID>
}

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const auth = firebase.auth()
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      store.commit('updateUser',{ user })
    })
  }
}

