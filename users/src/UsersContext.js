import React, {useEffect, useState} from 'react';

export const UsersContext = React.createContext();

export default function UsersProvider({children}){
    const [users, setUsers] = useState([])
    const [check, setCheck] = useState(false)
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setCheck(true);
            })
            .catch(error => console.log(error))
    }
    return(
        <UsersContext.Provider value={{users,getData,check}}>
            {children}
        </UsersContext.Provider>
    )
}