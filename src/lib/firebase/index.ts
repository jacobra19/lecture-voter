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

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    Timestamp,
    getDoc,
    doc,
    setDoc,
    orderBy,
    query,
    limit,
    deleteDoc,
} from 'firebase/firestore';

import { IDBLecture } from '@types';

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

const getLectures = async () => {
    const lecturesRef = collection(db, 'lectures');
    const q = query(lecturesRef, orderBy('votesCount', 'desc'), orderBy('addedOn', 'desc'));
    const querySnapshot = await getDocs(q);
    const lectures = querySnapshot.docs.map((doc) => {
        let docData = doc.data();
        return {
            ...docData,
            addedOn: dayjs(docData.addedOn.toDate()).format(),
            documentId: doc.id,
        };
    });
    return lectures;
};

const addLecture = async ({ videoId }: { videoId: string }) => {
    const data = {
        videoId,
        addedOn: Timestamp.now(),
        addedBy: {
            displayName: auth.currentUser?.displayName,
            email: auth.currentUser?.email,
        },
        votes: [auth.currentUser?.email],
        votesCount: 1,
    };
    await addDoc(collection(db, 'lectures'), data);
};

const updateVote = async ({ documentId }: { documentId: string }) => {
    const docRef = doc(db, 'lectures', documentId);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();

    let votes = [...docData?.votes];
    const hasVoted = votes.includes(auth.currentUser?.email);
    if (hasVoted) {
        votes = votes.filter((vote) => vote !== auth.currentUser?.email);
    } else {
        votes.push(auth.currentUser?.email);
    }

    await setDoc(docRef, {
        ...docData,
        votes,
        votesCount: votes.length,
    });
};

const deleteLecture = async ({ documentId }: { documentId: string }) => {
    const docRef = doc(db, 'lectures', documentId);
    await deleteDoc(docRef);
};

const signInWithGithub = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        const userCredential: IUserCredential = await signInWithPopup(auth, gitHubProvider);
        const credential = GithubAuthProvider.credentialFromResult(userCredential);
        const token = credential?.accessToken;
        return userCredential.user;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
    }
};

export { app, gitHubProvider, auth, signInWithGithub, signOut, getLectures, addLecture, deleteLecture, updateVote };
