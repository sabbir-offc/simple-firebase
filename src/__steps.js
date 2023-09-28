/**
 * 1. visit: https://console.firebase.google.com/u/0/
 * 2. create project (skip google analytics)
 * 3. Register app.(create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project. 
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github.
 * 7. Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.init.js : export default app
 * 9. Login.jsx import { getAuth } from "firebase/auth";
 * 10. create: const auth = getAuth(app)
 * 11. create: const provider = new GoogleAuthProvider()
 * 12. use SignInWithPopUp and pass auth and provider.
 * 13. activate sign in method from firebase.
 * */ 