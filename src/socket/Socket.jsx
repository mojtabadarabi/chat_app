import io from 'socket.io-client'

const socket = io.connect("http://localhost:3010/socket")

function connect() {
    
}

function newMessage(params) {
    socket.current.emit("newMessage", message);
}