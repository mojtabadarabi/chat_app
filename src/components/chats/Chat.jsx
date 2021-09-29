import React, { useEffect, useRef } from "react";
import "../../app.css";
import ChatBody from "./chatbody/ChatBody";
import ChatContainer from "./ChatContainer";
import NewMessage from "./newmessage/NewMessage";
import { useContextActions } from "../../context/ContextProvider";

import io from "socket.io-client";

const socket = io.connect('http://localhost:3010/socket');

function Chat() {
  const scrolBottom = useRef(null)
  return (
      <ChatContainer >
          <ChatBody  scrolBottom={scrolBottom}/>
          <NewMessage socket={socket} scrolBottom={scrolBottom}/>
      </ChatContainer>


  )
}

export default Chat;
