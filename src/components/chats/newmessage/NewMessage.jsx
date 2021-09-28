import React from 'react'
import style from './newmessage.module.css'
import { GrAttachment } from "react-icons/gr";
import { GrSend } from "react-icons/gr";

function NewMessage() {
    return (
        <div className={style.newMessageContainer}>
            <textarea  placeholder="Message" ></textarea>
            <button className={style.button} >
                <GrAttachment/>
            </button>
            <button className={style.button}>
                <GrSend/>
            </button>
        </div>
    )
}

export default NewMessage
