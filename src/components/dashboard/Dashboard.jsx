import React from 'react'
import Chat from '../chats/Chat'
import Contacts from '../contacts/Contacts'
import style from './dashboard.module.css'

function Dashboard() {
    return (
        <div className={style.container}>
            <Contacts/>
            <Chat/>
            <section className={`${style.chatInfo} ${style.col}`}>
                contacts
            </section>
        </div>
    )
}

export default Dashboard
