import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../config/firebase"


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState<any>(null)
    useEffect(() => {
        const listen = onAuthStateChanged(
            auth, (user)=>{
                if (user) {
                    setAuthUser(user)
                } else {
                    setAuthUser(null)
                }
            }
        )
        return () => {
            listen()
        }

    }, [])
    const userSignOut = () =>{
        signOut(auth).then(
            ()=>{
                console.log('logged out');
                
            }
        )
        .catch((error)=>console.log(`Error while logging out:`, error))
    }
  return (
    <div>
        {
            authUser ? 
            <>
             <h1>{`Logged In as ${authUser.email}`}</h1> 
             <button onClick={userSignOut}>Sign Out</button>
            </>
           : <h1>Logged out</h1>
        }
    </div>
  )
}

export default AuthDetails