import React, {useContext, useEffect, useState} from 'react';
import {UsersContext} from "./UsersContext";


export default function Users (){
    const {users, getData, check} = useContext(UsersContext);
    if (!check){
        return(
            <button className={'button'} onClick={getData}>show</button>
        )
    }

        return (
            <div className={'container'}>
                {users.map((user) =>
                    <div key={user.id} className={'user'}>
                    <h3 className={'name'}>{user.name}</h3>
                        <section className={'info-section'}>
                            <div className="title">Personal information</div>
                            <div><b>username:</b>{user.username}</div>
                            <div><b>email:</b> {user.email}</div>
                            <div><b>address:</b> {user.address.city} {user.address.street} {user.address.suite}</div>
                            <div><b>phone:</b> {user.phone}</div>
                            <div><b>website:</b>{user.website}</div>
                        </section>
                        <section className="info-section">
                            <div className="title">Work information</div>
                            <div><b>company name:</b>{user.company.name}</div>
                            <div><b>catch phrase:</b>{user.company.catchPhrase}</div>
                            <div><b>bs:</b> {user.company.bs}</div>
                        </section>
                    </div>
                )}
            </div>
        )
}