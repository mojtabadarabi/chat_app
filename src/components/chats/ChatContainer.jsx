import React from 'react'
import style from './chat.module.css'
import { FiPhone } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import avatar from '../../images/avatar.png'
import '../../app.css'
import { useContextActions } from '../../context/ContextProvider';

function ChatContainer({children}) {
    const dispatch = useContextActions()
    return (
        <section className={style.chatContainer}>
            <header className={style.header}>
                <img src={avatar} alt="avatar" className='avatar'/>
                <div>
                    <h3>Elizabeth Nelson</h3>
                    <span>online</span>
                </div>
                <div>
                    <button >
                        <FiPhone />
                    </button>
                    <button>
                        <FiVideo/>
                    </button>
                </div>
            </header>
            {children}
        </section>
    )
}

export default ChatContainer
