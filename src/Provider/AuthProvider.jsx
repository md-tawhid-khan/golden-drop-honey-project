import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const createUser=(email, password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateprofile=(name,photo)=>{

        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    const logOut=async()=>{
        setLoading(true)
        return await signOut(auth)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn= async()=>{
     return await signInWithPopup(auth, googleProvider)
    }

 useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        console.log('current user ---------->', currentUser)
    })
    return ()=>{
        unSubscribe()
    }
 },[])


 const authInfo={
    createUser,
    updateprofile,
    loading,
    setLoading,
    user,
    setUser,
    logOut,
    signIn,
    googleSignIn

 }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;