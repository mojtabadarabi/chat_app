import React from 'react'
import style from './contactInfo.module.css'
import avatar from '../../images/avatar.png'
import {FiSmartphone} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'

import { useContextActions } from '../../context/ContextProvider'

function ContactInfo() {

    return (
        <section className={style.contactInfoContainer}>
                <img src={avatar} alt="avatar" className={style.avatar}/>
                <h3>Name LastName</h3>
                <div className={style.LinkInfo}>
                    <div >
                        <FiSmartphone/>
                        <span>09224501561</span>
                    </div>
                </div>
                <div className={style.LinkInfo}>
                    <div >
                        <MdEmail/>
                        <span>mj.darabi113@gmail.com</span>
                    </div>
                </div>

        </section>
    )
}

export default ContactInfo
