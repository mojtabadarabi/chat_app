const express = require("express");
const io = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  console.log(new Date());
  console.log(new Date())
});
app.get("/salam", (req, res) => {
  res.send("salam . I am alive");
});

const server = app.listen(3010, (err) => {
  console.log("App Listen to port 3010fff");
});

const socket = io(server);
const mySocket = socket.of("/socket");

mySocket.on("connection", (socket) => {
  console.log("new User Connected");

  socket.on("newMessage", (message) => {
    console.log(message);
    mySocket.emit("newMessage", {...message, date: new Date(), id: Math.floor(Math.random() * Math.pow(10, 7))});
  });
  socket.on("deletemessage", (id) => {
    mySocket.emit("deletemessage",id);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
});




