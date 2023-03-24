import React, {useState, createContext} from "react";

export const UsertContext = createContext('')

export const UserContextProvider = ({children}) => {

    const objStr = JSON.parse(sessionStorage.getItem("user"))
    const [user, setUser] = useState({
        name: objStr?.name || "",
        surname: objStr?.surname || "",
        email: objStr?.email || "",
        phone_number: objStr?.phone_number || "+995",
        about_me: objStr?.about_me || "",
        image: objStr?.image || ""
    })

    return(
        <UsertContext.Provider value={{user, setUser, objStr}}>
            {children}
        </UsertContext.Provider>
    )
}