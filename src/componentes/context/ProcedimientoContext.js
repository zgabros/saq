import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const ContextSAQ = createContext({});

function AppContext({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBqIq4scg5qMcb3zfd9Oz3CV3ILV0kgr3M",
    authDomain: "facturizer.firebaseapp.com",
    projectId: "facturizer",
    storageBucket: "facturizer.appspot.com",
    messagingSenderId: "658762463793",
    appId: "1:658762463793:web:17118b10fa0076c2213310",
    measurementId: "G-KV6GJTRGGL",
  };

  //   const firebaseConfig = {
  //     apiKey: "AIzaSyCoKPOo0r9jjHkflNDHuSIpBfIQ6xSj7Ks",
  //     authDomain: "saq-app-a81e1.firebaseapp.com",
  //     projectId: "saq-app-a81e1",
  //     storageBucket: "saq-app-a81e1.appspot.com",
  //     messagingSenderId: "397246895422",
  //     appId: "1:397246895422:web:1e2b5ccdc5b8cc914c886f",
  //   };

  const app = initializeApp(firebaseConfig);

  const authication = getAuth(app);

  const sinfInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authication, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mi = 1;
  const ma = 1;
  return (
    <ContextSAQ.Provider value={{ sinfInWithGoogle }}>
      {children}
    </ContextSAQ.Provider>
  );
}

export default AppContext;
