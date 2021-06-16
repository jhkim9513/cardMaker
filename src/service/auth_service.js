import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
  login(providerName) {
    // https://firebase.google.com/docs/auth/web/github-auth?authuser=0  참고
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  // ouUserChanged는 onAuthChange함수가 실행될때마다 받는 callback함수로 그때 그때 하는 일이 다르다
  // 단, callback함수에서 사용되는 인자 user는 onAuthStateChanged의 user이다.
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error("not supported provider");
    }
  }
}

export default AuthService;
