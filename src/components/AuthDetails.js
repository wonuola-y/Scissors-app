import React, { useState } from 'react'

const AuthContext = React.createContext(null)
const AuthDetails = ({ children }) => {

  const [currentUser, setCurrentUser] = useState()
  return (
    <AuthContext.Provider>
{children}
    </AuthContext.Provider>
  )
}

export default AuthDetails