
import React from 'react'
import style from './contacts.module.css'
import avatar from '../../images/avatar.png'
import '../../app.css'

function Contact({name,seen,time}) {
    return (
        <li className={style.cotactContainer}>
        <img className='avatar' src={avatar} alt="avatar" />
        <div className={style.infoContainer} >
            <div className={style.info}>
                <span>{name}</span>
                <span>{seen}</span>
            </div>
            <span className={style.time} >{time}</span>
        </div>
    </li>
    )
}

export default Contact
