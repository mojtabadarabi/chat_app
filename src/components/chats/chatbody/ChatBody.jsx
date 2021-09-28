import React from 'react'
import avatar from '../../../images/avatar.png'
import style from './chatBody.module.css'

import '../../../app.css'
import ContactMessage from './ContactMessage'
import UserMessage from './UserMessage'
import { useContextValue } from '../../../context/ContextProvider'

function ChatBody() {
    const state=useContextValue()
    console.log(state);
    const message ='Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.[6]'
    return (
        <div className={style.chatContainer}>
            <ContactMessage avatarSrc={avatar} alt='avatar' message={message}/>
            <UserMessage avatarSrc={state.user.avatar} alt='avatar' message={message}/>
            <ContactMessage avatarSrc={avatar} alt='avatar' message={message}/>
        </div>
    )
}

export default ChatBody
