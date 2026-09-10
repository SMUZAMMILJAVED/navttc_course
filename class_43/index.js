const express=require('express');
const http=require('http');
const path =require("path");
const { Server } = require('socket.io');

const app=express()
const server=http.createServer(app)
const io = new Server(server);
app.use(express.static(path.join(process.cwd(),'views')))
io.on('connection', (socket) => {
 socket.on('chat message', (msg) => {
     io.emit('chat message', "data"+msg);
  });
});
server.listen(4000,()=>{
    console.log("server is running at 4000")
})