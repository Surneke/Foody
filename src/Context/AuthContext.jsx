// // import { auth } from '../FirebaseForThisProject/Firebase'
// // import {
// //     createUserWithEmailAndPassword,
// //     signInWithEmailAndPassword,
// // } from 'firebase/auth'
// import { createContext, useContext, useState } from 'react'

// export const AuthContext = createContext()
// export const useAuth = () => {
//     return useContext(AuthContext)
// }

// export const AuthProvider = ({children}) => {
//     const [currentUser, setCurrentUser] = useState()
//     const [loggedIn,setLoggedIn] = useState(false)
//     // const Sign = (email, password) => {
//     //     // return createUserWithEmailAndPassword(auth,email,password)
//     // }
//     // const Login = (email, password) => {
//     //     // return signInWithEmailAndPassword(auth,password, email)
//     // } 
//     // const value = {
//     //     // Login,
//     //     // Sign,
//     //     // currentUser,
//     //     // setCurrentUser,
//     //     // loggedIn,
//     //     // setLoggedIn
//     // }
//     return 
//     <AuthContext.Provider >
//         {children}
//     </AuthContext.Provider>
// }
import {auth} from "../FirebaseForThisProject/Firebase";
import { createContext, useContext, useState } from 'react'
 import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
 } from 'firebase/auth'

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loggedIn,setLoggedIn] = useState(false);
    const state ={
        currentUser, setCurrentUser,loggedIn,setLoggedIn
    }

 return(
     <AuthContext.Provider value={state}>
            {children}
     </AuthContext.Provider>
 )
}
