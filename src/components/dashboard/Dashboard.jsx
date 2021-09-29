import React, { useEffect, useRef } from 'react'
import { withRouter } from 'react-router'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import Chat from '../chats/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import Contacts from '../contacts/Contacts'
import style from './dashboard.module.css'


function Dashboard(props) {
    const state=useContextValue()
    const dispatch=useContextActions()

    return (
        <div className={style.container}>
            <Contacts/>
            <Chat/>
            <ContactInfo/>
        </div>
    )
}

export default withRouter(Dashboard)
