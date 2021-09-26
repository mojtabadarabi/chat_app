import React from 'react'
import Contacts from '../contacts/Contacts'
import style from './dashboard.module.css'

function Dashboard() {
    return (
        <div className={style.container}>
            <Contacts/>
            <section className={`${style.chat} ${style.col}`}>
                contacts
            </section>
            <section className={`${style.chatInfo} ${style.col}`}>
                contacts
            </section>
        </div>
    )
}

export default Dashboard
