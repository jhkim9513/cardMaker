import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    // https://firebase.google.com/docs/auth/web/github-auth?authuser=0  참고
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;