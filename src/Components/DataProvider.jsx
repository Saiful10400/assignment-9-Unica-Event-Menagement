import { createContext, useEffect, useState } from "react";
import auth from "./../Authentication/firebaseinit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";

export const datacontext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const DataProvider = ({ children }) => {
    const[user,setUser]=useState(null)
    const[loading,setloading]=useState(true)
  // all athentication related page solution.

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        setloading(false)
    })
    return unsubscribe
  },[])

//   signout
const Logout=()=>{
    signOut(auth)
    .then(()=>console.log("sighout"))
    .catch(error=>console.log(error))
}

  console.log(user)
  // 1.google provider.
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
//   2. email and password.

const createuser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
}

// 3.email and password login.

const emailLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}




// context api daat.
  const conveyedData = {
    googleLogin,
    user,
    Logout,
    createuser,
    emailLogin,
    loading
  };
  return (
    <div>
      <datacontext.Provider value={conveyedData}>
        {children}
      </datacontext.Provider>
    </div>
  );
};

export default DataProvider;
