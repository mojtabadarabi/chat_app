import React from 'react'
import Chat from '../chats/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import Contacts from '../contacts/Contacts'
import style from './dashboard.module.css'

function Dashboard() {
    return (
        <div className={style.container}>
            <Contacts/>
            <Chat/>
            <ContactInfo/>
        </div>
    )
}

export default Dashboard
