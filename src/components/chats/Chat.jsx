import React from "react";
import "../../app.css";
import ChatBody from "./chatbody/ChatBody";
import ChatContainer from "./ChatContainer";
import NewMessage from "./newmessage/NewMessage";

function Chat({avatar}) {
  return (
      <ChatContainer >
          <ChatBody />
          <NewMessage/>
      </ChatContainer>


  )
}

export default Chat;
