import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'

const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

export const firebaseConnection = (userLocalStorage) => {
    const firebaseConfig = {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    };
    
    //FIREBASE  init firebase aop
    initializeApp(firebaseConfig)
    
    // FIREBASE init services
    const db = getFirestore()
    
    const colRef = collection(db, userLocalStorage)
    
    // RETURN CONNECTION BASED ON LocalStorage USER NAME
    return colRef

}

