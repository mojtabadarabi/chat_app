import React, { createContext, useContext, useReducer, useState } from 'react'

const reducer =(state,action)=>{
    switch (action.type) {
        case "login":
            localStorage.setItem('token','241g5as4g5ad1g2a4dg5ad4g1a2dg4ad5gadg')
            return {...state,user:action.user,isAuthenticated:true}
        case "logout":
            localStorage.clear()
            return {...state,user:{},isAuthenticated:false}
        case 'authenticate':
            return {...state,isAuthenticated:true}
        case 'newmessage':
            const messagesArray=[...state.messages]
            messagesArray.push(action.message)
            return {...state,messages:messagesArray}
        case 'deleteMessage':
            console.log(state);
            const filteredList=state.messages.filter(msg=>msg.id!==action.id)
            return {...state,messages:filteredList}
        default:
            return state;
    }
}
const context = createContext();
const contextDispatcer = createContext();
const initialState={
    isAuthenticated:false,
    user:{},
    messages:[]
}

function ContextProvider({children}) {
    const [contextValue, dispatch] = useReducer(reducer,initialState)
    return (
        <context.Provider value={contextValue}>
            <contextDispatcer.Provider value={dispatch}>
                {children}
            </contextDispatcer.Provider>
        </context.Provider>
    )
}

export default ContextProvider


export const useContextValue = () => useContext(context);
export const useContextActions = () => useContext(contextDispatcer);