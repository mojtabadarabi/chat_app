import React, { useEffect, useRef } from "react";
import "../../app.css";
import ChatBody from "./chatbody/ChatBody";
import ChatContainer from "./ChatContainer";
import NewMessage from "./newmessage/NewMessage";
import { useContextActions, useContextValue } from "../../context/ContextProvider";

import io from "socket.io-client";

const socket = io.connect('http://localhost:3010/socket');

function Chat() {
  const {user} = useContextValue()
  const dispatch=useContextActions()
  const scrolBottom = useRef(null)

  useEffect(() => {
    socket.on('newMessage',(message)=>{
        dispatch({type:'newmessage',message})
        scrolBottom.current.scroll(0,scrolBottom.current.scrollHeight)
        
    })
    socket.on('deletemessage',(id)=>{
      console.log('on socket');
      dispatch({type:'deleteMessage',id})
        
    })
}, [])
function setNewMessageSocket(message) {
    socket.emit("newMessage", message);
}
function deleteMessageUserMessage(id) {
  socket.emit('deletemessage',id)

}
function deleteMessageContactMessage(id) {
  dispatch({type:'deleteMessage',id})

}

  return (
      <ChatContainer >
          <ChatBody deleteMessageContactMessage={deleteMessageContactMessage} deleteMessageUserMessage={deleteMessageUserMessage} scrolBottom={scrolBottom}/>
          <NewMessage setNewMessageSocket={setNewMessageSocket}scrolBottom={scrolBottom}/>
      </ChatContainer>


  )
}

export default Chat;
