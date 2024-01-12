
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionDate} from 'react-firebase-hooks/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBpBE42tj5WReWH4ofhodrh8afqwJtnkjE",
  authDomain: "chatappdb-22b36.firebaseapp.com",
  projectId: "chatappdb-22b36",
  storageBucket: "chatappdb-22b36.appspot.com",
  messagingSenderId: "925112506501",
  appId: "1:925112506501:web:4da737fc083d39aafe31ec",
  measurementId: "G-ZR8NE7B5TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>


    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return(
    <button onClick={signInWithGoogle}>Sign In with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
  
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key = {msg.id} />)}
      </div>
    </>
  )
}

function ChatMessage(props){
  const {text, uid} = props.message;

  return <p>{text}</p>
}

export default App;
