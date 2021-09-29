import React, { useEffect, useRef, useState } from 'react'
import style from './newmessage.module.css'
import { GrAttachment } from "react-icons/gr";
import { GrSend } from "react-icons/gr";
import { useContextActions, useContextValue } from '../../../context/ContextProvider';
import io from 'socket.io-client'


function NewMessage({socket,scrolBottom}) {
    
    const [messageText, setmessageText] = useState()
    const {user} = useContextValue()
    const dispatch=useContextActions()
    console.log(scrolBottom);
    useEffect(() => {
        socket.on('newMessage',(message)=>{
            dispatch({type:'newmessage',message})
            scrolBottom.current.scroll(0,scrolBottom.current.scrollHeight)
            
        })
    }, [])
    
    function submitNewMessageHandler(e) {
        e.preventDefault()
        if (messageText!==''&&messageText!==' ') {
            const message={
                msg:messageText,
                author:user
            }
            socket.emit("newMessage", message);

            setmessageText('')
        }
    }
    return (
        <form onSubmit={(e)=>submitNewMessageHandler(e)} className={style.newMessageContainer}>
            <textarea value={messageText} onChange={(e)=>setmessageText(e.target.value)} placeholder="Message" ></textarea>
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
