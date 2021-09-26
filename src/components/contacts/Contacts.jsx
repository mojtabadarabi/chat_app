import React from 'react'
import style from './contacts.module.css'
import avatar from '../../images/avatar.png'
import '../../app.css'

function Contacts() {
    return (
        <section className={style.cotactsContainer}>
            <header className={style.header}>
                <h1>Message</h1>
                <div><input type="text" placeholder='Search Chat'/></div>
            </header>
            <ul>
                <li className={style.cotactContainer}>
                    <img className='avatar' src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
                <li className={style.cotactContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar" />
                    <div className={style.infoContainer} >
                        <div className={style.info}>
                            <span>cotact name</span>
                            <span>last seen</span>
                        </div>
                        <span className={style.time} >12:05AM</span>
                    </div>
                </li>
               
            </ul>
        </section>
    )
}

export default Contacts
