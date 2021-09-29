import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router'
import { useContextActions, useContextValue } from '../../context/ContextProvider'
import styles from './login.module.css'

function LoginPage({history}) {
    const dispatch=useContextActions()
    const [name, setname] = useState('')
    const [lastName, setlastName] = useState('')
    function submitLoginHandler(e) {
        e.preventDefault()
        const user={
            name,
            lastName,
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcLzYU8SsybUPTpqpI01wbVK1Ysqi5FU98w&usqp=CAU'
        }
        if (name!==''&&name!==' '&&lastName!==''&&setlastName!==' ') {
            dispatch({type:'login',user})
            history.replace({
                pathname:"/",
                state:{
                    name,
                    lastName
                }
            })
        }
        else{
            alert('invalid fields')
        }
    }
    
    return (
            <form className={styles.formContainer} onSubmit={(e)=>submitLoginHandler(e)}>
                <div>
                    <div>
                        <label htmlFor="name">User Name</label>
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} name='name' placeholder='name'/>
                    </div>
                    <div>
                        <label htmlFor="lastname">User LastName</label>
                        <input type="text"value={lastName} onChange={(e)=>setlastName(e.target.value)}  name='lastname' placeholder='lastName'/>
                    </div>
    
                </div>
                <button type='submit'>login</button>
            </form>
    )
}

export default withRouter(LoginPage)
