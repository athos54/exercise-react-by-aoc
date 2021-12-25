import React, { useContext } from 'react'
import { removeAuthCookie } from 'services/auth'
import AuthContext from 'context/AuthContext'

const Logout = () => {
    const context = useContext(AuthContext)

    const handleLogout = () => {
        context.auth.logout()
    }

    return (
        <button onClick={handleLogout}>
            logout
        </button>
    )
}

export default Logout
