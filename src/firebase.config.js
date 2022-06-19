import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA7JzzozN0Kx8wN6bguI-q2woZNF5zwAmA",
    authDomain: "foodapp-7286f.firebaseapp.com",
    databaseURL: "https://foodapp-7286f-default-rtdb.firebaseio.com",
    projectId: "foodapp-7286f",
    storageBucket: "foodapp-7286f.appspot.com",
    messagingSenderId: "474186990797",
    appId: "1:474186990797:web:e61312758555ebcddd5584"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
