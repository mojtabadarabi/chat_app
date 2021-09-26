import React from 'react'
import style from './newmessage.module.css'

function NewMessage() {
    return (
        <div className={style.newMessageContainer}>
            <input type="text" placeholder='message' />
        </div>
    )
}

export default NewMessage
