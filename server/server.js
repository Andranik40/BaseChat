const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});

io.on("connection", userSocket => {
    console.log("Connected!");

    userSocket.on('disconnect', () => {
        console.log('disconnect')
    });
    userSocket.on('send',(preportys) => {
        console.log(preportys)
        io.emit('reSend', preportys)
    })
});

server.listen(3012);