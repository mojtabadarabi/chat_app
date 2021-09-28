import React from 'react'
import style from './contacts.module.css'
import Contact from './Contact'
import {CgLogOut} from 'react-icons/cg'
import { useContextActions } from '../../context/ContextProvider'

function Contacts() {
    const dispatch=useContextActions()
    return (
        <section className={style.cotactsContainer}>
            <header className={style.header}>
                <div>
                    <button className={style.logout} onClick={()=>dispatch({type:'logout'})}>
                        <CgLogOut/>
                    </button>
                    <h1>Message</h1>

                </div>
                <div><input type="text" placeholder='Search Chat'/></div>
            </header>
            <ul>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
                <Contact name='contact name' seen='last seen' time='12:05AM'/>
              
            </ul>
        </section>
    )
}

export default Contacts
