// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZMKYvpGaV2SSMNGBP35ts9hZECVLS9U",
  authDomain: "fb-clone-35b1a.firebaseapp.com",
  projectId: "fb-clone-35b1a",
  storageBucket: "fb-clone-35b1a.appspot.com",
  messagingSenderId: "130148479282",
  appId: "1:130148479282:web:93306c670e38dcf0f4272b",
  measurementId: "G-T5GYZFS18Y"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;