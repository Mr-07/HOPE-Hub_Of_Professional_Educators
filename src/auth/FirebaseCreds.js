import { initializeApp }  from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyBI1J8DgX6GNaTRBpIugsnj0gK-j3aIqhk",
    authDomain: "hope-dev-20b5e.firebaseapp.com",
    projectId: "hope-dev-20b5e",
    storageBucket: "hope-dev-20b5e.appspot.com",
    messagingSenderId: "42955094326",
    appId: "1:42955094326:web:49bc39d4db188512971b97",
    measurementId: "G-8TBB2QJSPH"
});

export const auth = getAuth(app)
export default app
