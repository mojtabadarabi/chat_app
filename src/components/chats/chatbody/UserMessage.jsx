import React from 'react'
import style from './chatBody.module.css'
import {IoTrashBinSharp} from 'react-icons/io5'

function UserMessage({message,date,deleteMessage}) {
    return (
        <div className={`${style.message} ${style.userMessage}`}>
            <img src={message.author.avatar} alt={message.author.name} className='avatar'/>
            <div>
                <span>{message.name}</span>
                <p>{message.msg}</p>
                <div>
                    <span>{date}</span>
                    <button onClick={()=>deleteMessage(message.id)}>
                        <IoTrashBinSharp/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserMessage
