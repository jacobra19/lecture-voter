import dayjs from 'dayjs';
import { initializeApp } from 'firebase/app';
import {
    GithubAuthProvider,
    signOut,
    getAuth,
    signInWithPopup,
    UserCredential as IUserCredential,
    browserLocalPersistence,
    setPersistence,
} from 'firebase/auth';

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { IDBLecture } from 'src/types';

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

const db = getFirestore();

const auth = getAuth();

const getLectures: () => Promise<IDBLecture[]> = async () => {
    const querySnapshot = await getDocs(collection(db, 'lectures'));
    const lectures = querySnapshot.docs.map((doc) => {
        let docData = doc.data();
        return {
            ...docData,
            addedOn: dayjs(docData.addedOn.toDate()).format(),
            documentId: doc.id,
        } as IDBLecture;
    });
    return lectures;
};

const signInWithGithub = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        const userCredential: IUserCredential = await signInWithPopup(
            auth,
            gitHubProvider,
        );
        const credential =
            GithubAuthProvider.credentialFromResult(userCredential);
        const token = credential?.accessToken;
        return userCredential;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
    }
};

export { app, gitHubProvider, auth, signInWithGithub, signOut, getLectures };
