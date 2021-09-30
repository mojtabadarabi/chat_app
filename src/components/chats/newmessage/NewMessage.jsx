import React, { useEffect, useRef, useState } from 'react'
import style from './newmessage.module.css'
import { GrAttachment } from "react-icons/gr";
import { GrSend } from "react-icons/gr";
import {  useContextValue } from '../../../context/ContextProvider';


function NewMessage({setNewMessageSocket}) {
    const {user} = useContextValue()
    
    const [messageText, setmessageText] = useState()
    
    function submitNewMessageHandler(e) {
        e.preventDefault()
        if (messageText!==''&&messageText!==' ') {
            const message={
                msg:messageText,
                author:user
            }
            
            setNewMessageSocket(message)
      
            setmessageText('')
        }
      }
    return (
        <form onSubmit={(e)=>submitNewMessageHandler(e)} className={style.newMessageContainer}>
            <textarea value={messageText} onChange={(e)=>setmessageText(e.target.value,messageText,setmessageText)} placeholder="Message" ></textarea>
            <button className={style.button} >
                <GrAttachment/>
            </button>
            <button type='submit' className={style.button}>
                <GrSend/>
            </button>
        </form>
    )
}

export default NewMessage
