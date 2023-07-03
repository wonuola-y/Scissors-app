import { onAuthStateChanged } from "firebase/auth"
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
    }, [])
    
  return (
    <div>
        {
            authUser ? <h1>Logged in</h1> : <h1>Logged out</h1>
        }
    </div>
  )
}

export default AuthDetails