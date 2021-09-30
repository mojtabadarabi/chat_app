import React, { useRef } from 'react'
import avatar from '../../../images/avatar.png'
import style from './chatBody.module.css'

import '../../../app.css'
import ContactMessage from './ContactMessage'
import UserMessage from './UserMessage'
import { useContextValue } from '../../../context/ContextProvider'

function ChatBody({deleteMessageContactMessage,deleteMessageUserMessage,scrolBottom}) {
    const state=useContextValue()
    const {messages} = useContextValue()
    return (
        <div className={style.chatContainer} ref={scrolBottom}>
            
           {
               messages.map((message,index)=>(
                message.author.name===state.user.name?(
                    <UserMessage deleteMessage={deleteMessageUserMessage} message={message} date={message.date.split('T')[1].split('.')[0]} key={index}/>
                ):(
                    <ContactMessage deleteMessage={deleteMessageContactMessage} message={message} date={message.date.split('T')[1].split('.')[0]} key={index}/>
                )
               ))
           }
        </div>
    )
}

export default ChatBody
