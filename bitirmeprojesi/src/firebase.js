import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCvvBziblLbZj8ApkwfYeUPoS2NN_UglNY",
  authDomain: "todo-92965.firebaseapp.com",
  databaseURL: "https://todo-92965-default-rtdb.firebaseio.com",
  projectId: "todo-92965",
  storageBucket: "todo-92965.appspot.com",
  messagingSenderId: "206697008740",
  appId: "1:206697008740:web:a09ce7915c098395b61971"
};


const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);
export const auth =getAuth();
