import React from 'react'
import style from './contacts.module.css'
import Contact from './Contact'

function Contacts() {
    return (
        <section className={style.cotactsContainer}>
            <header className={style.header}>
                <h1>Message</h1>
                <div><input type="text" placeholder='Search Chat'/></div>
            </header>
            <ul>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
            </ul>
        </section>
    )
}

export default Contacts
