import React, {useState} from "react"

export const UserContext = React.createContext()

export const UserProvider = ({children}) =>{
    let [user,setUser] = useState('')
    let changeName = name =>  setUser(name)
    return (
        <UserContext.Provider value={{
            user,changeName
        }}>
            {children}
        </UserContext.Provider>
    )
}
