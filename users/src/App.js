import React, {useEffect, useState} from 'react';
import UsersProvider from "./UsersContext";
import Users from "./Users";


export default function App(){
    return(
        <UsersProvider>
            <Users/>
        </UsersProvider>
    )
}