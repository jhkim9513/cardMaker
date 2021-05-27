import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    // https://firebase.google.com/docs/auth/web/github-auth?authuser=0  참고
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  // ouUserChanged는 onAuthChange함수가 실행될때마다 받는 callback함수로 그때 그때 하는 일이 다르다
  // 단, callback함수에서 사용되는 인자 user는 onAuthStateChanged의 user이다.
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
