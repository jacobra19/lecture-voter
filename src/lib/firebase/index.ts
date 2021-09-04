import { initializeApp } from 'firebase/app';
import {
    GithubAuthProvider,
    signOut,
    getAuth,
    signInWithPopup,
} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDi2XLCoSAlKJWzpwHmPqwR47ZE50cvr0g',
    authDomain: 'lecture-voter.firebaseapp.com',
    projectId: 'lecture-voter',
    storageBucket: 'lecture-voter.appspot.com',
    messagingSenderId: '169844344401',
    appId: '1:169844344401:web:daa72a9eace748572fda70',
    measurementId: 'G-2QP7DRBL3C',
};

const app = initializeApp(firebaseConfig);

const gitHubProvider = new GithubAuthProvider();

const auth = getAuth();

const signInWithGithub = async () => {
    signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log(`user`, user);
            return user;
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
};

export { app, gitHubProvider, auth, signInWithGithub };
