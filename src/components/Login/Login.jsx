import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(setUser(null))
      .catch((error) => console.log(error));
  };
  const handleGithubSign = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="p-6 pt-0">
        {user ? (
          <div className="bg-purple-600 px-4 py-2 mt-3 rounded-xl text-white font-bold">
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleGoogleLogin}
              className="block w-full bg-sky-500 text-white py-2 rounded-md font-bold"
              type="button"
              data-ripple-light="true"
            >
              Sign In Google
            </button>
            <button
              onClick={handleGithubSign}
              className="block w-full bg-lime-700 text-white py-2 rounded-md font-bold mt-3"
              type="button"
              data-ripple-light="true"
            >
              Sign In Github
            </button>
          </div>
        )}
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Dont have an account?
          <a
            href="#signup"
            className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
          >
            Sign up
          </a>
        </p>
      </div>

      {user && (
        <div>
          <h1 className="text-3xl">User: {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="image load failed" />
        </div>
      )}
    </div>
  );
};

export default Login;
