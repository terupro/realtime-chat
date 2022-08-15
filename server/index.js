const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 4000;
const { Server } = require("socket.io");

const io = new Server(server);
io.on("connection", (socket) => {
  console.log("ユーザーと接続しました。" + "socket-id:" + socket.id);
  socket.on("disconnect", () => {
    console.log("ユーザーとの接続が切れました！" + "socket-id:" + socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
