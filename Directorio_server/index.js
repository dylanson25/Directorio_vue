const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io", {
  cors: {
    origin: "http//localhost:8081",
  },
});

const io = new Server(server);

let directorio = [];

//dependencia necesaria para generar el archivo de texto
const fs = require("fs");

const nombreArchivo = "directorio.txt";

const writeFileDirectorio = (data) => {
  fs.writeFile(nombreArchivo, JSON.stringify(data), (err) => {
    if (err) throw err;
  });
  console.log("Directorio Guardado");
};

const ReadFileDirectorio = () => {
  fs.readFile("directorio.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("err:", err);
    } else {
      directorio = JSON.parse(data);
    }
  });
};

app.get("/", (req, res) => {
  res.send("SocketO...");
});

io.on("connection", (socket) => {
  console.log("A user conected");

  ReadFileDirectorio();
  socket.emit("UPDATE_DIRECTORIO", directorio);

  socket.on("update_directorio", (newDirectorio) => {
    console.log("Load new directorio");
    directorio = newDirectorio;
    writeFileDirectorio(directorio);
    socket.broadcast.emit("UPDATE_DIRECTORIO", directorio);
  });
});

server.listen(8081, () => {
  console.log("listening on *:8081");
});

module.exports = app;
