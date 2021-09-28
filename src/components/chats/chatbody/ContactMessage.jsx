import React from 'react'
import style from './chatBody.module.css'

function Message({avatarSrc,alt,message}) {
    return (
        <div className={`${style.message} ${style.contactMessage}`}>
            <img src={avatarSrc} alt={alt} className='avatar'/>
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
