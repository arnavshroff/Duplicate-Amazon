import { firebase } from '@firebase/app'; 
import '@firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDmj5Kfzk9_tONBscVh4SPJMCxPGj2pb-M",
  authDomain: "fir-1ad11.firebaseapp.com",
  projectId: "fir-1ad11",
  storageBucket: "fir-1ad11.appspot.com",
  messagingSenderId: "285125770899",
  appId: "1:285125770899:web:1d6f8e4f933af0cc2f1766"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();