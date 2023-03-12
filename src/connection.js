import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'

export const firebaseConnection = (userLocalStorage) => {
    const firebaseConfig = {
        apiKey: "AIzaSyAU1TM-L3RbkMRThHg2flKYCw8fNhV7apM",
        authDomain: "scrapbook-f460c.firebaseapp.com",
        projectId: "scrapbook-f460c",
        storageBucket: "scrapbook-f460c.appspot.com",
        messagingSenderId: "1031015130332",
        appId: "1:1031015130332:web:91275fc6fb401445578019"
    };
    
    //FIREBASE  init firebase aop
    initializeApp(firebaseConfig)
    
    // FIREBASE init services
    const db = getFirestore()
    
    const colRef = collection(db, userLocalStorage)
    
    // RETURN CONNECTION BASED ON LocalStorage USER NAME
    return colRef

}

