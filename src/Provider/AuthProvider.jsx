import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

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
 console.log({user})

 const authInfo={
    createUser,
    updateprofile,
    loading,
    user,
    setUser

 }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;