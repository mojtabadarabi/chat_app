import React, { useRef } from 'react'
import avatar from '../../../images/avatar.png'
import style from './chatBody.module.css'

import '../../../app.css'
import ContactMessage from './ContactMessage'
import UserMessage from './UserMessage'
import { useContextValue } from '../../../context/ContextProvider'

function ChatBody({scrolBottom}) {
    const state=useContextValue()
    console.log(state);
    const {messages} = useContextValue()
    console.log(messages);
    return (
        <div className={style.chatContainer} ref={scrolBottom}>
            
           {
               messages.map((message,index)=>(
                message.author.name===state.user.name?(
                    <UserMessage date={message.date.split('T')[1].split('.')[0]} key={index} avatarSrc={message.author.avatar} alt={message.author.name} message={message.msg} name={message.author.name}/>
                ):(
                    <ContactMessage date={message.date.split('T')[1].split('.')[0]} key={index} avatarSrc={message.author.avatar} alt={message.author.name} message={message.msg} name={message.author.name}/>
                )
               ))
           }
        </div>
    )
}

export default ChatBody
