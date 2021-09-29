import React from 'react'
import style from './chatBody.module.css'

function UserMessage({avatarSrc,alt,message,name,date}) {
    return (
        <div className={`${style.message} ${style.userMessage}`}>
            <img src={avatarSrc} alt={alt} className='avatar'/>
            <div>
                <span>{name}</span>
                <p>{message}</p>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default UserMessage
