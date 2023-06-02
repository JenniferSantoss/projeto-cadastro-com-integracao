import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env,
        authDomain: process.env,
        projectId: process.env
    })
}

export default firebase