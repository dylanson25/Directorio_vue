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
/**
 * Example:
 * directotio = { 
  uid: 1a4650e20eb1421cb945907c7bd52012,  
  nombre: xtfchgvj,  
  direccion: vhbkjnlmñ,  
  phone: 5768980965,  
},
{ 
  uid: 1a4650e20eb1421cb945907c7bd52012,  
  nombre: xtfchgvj,  
  direccion: vhbkjnlmñ,  
  phone: 5768980965,  
} 
 */
//dependencia necesaria para generar el archivo de texto
const fs = require("fs");

const nombreArchivo = "directorio.txt";

const writeFileDirectorio = (directorioToWrite) => {
  let datos = "";

  //mapea el arreglo el cual tiene la estructura de la variable direcotrio
  directorioToWrite.map((registro) => {
    datos += "{ \n";
    //A qui solo recorro las propiedades del objeto
    for (let propName in registro) {
      datos += `  ${propName}: ${registro[propName]},  \n`;
    }
    datos += "} \n";
  });

  fs.writeFile(nombreArchivo, datos, (err) => {
    if (err) throw err;
  });
  console.log("Directorio Guardado");
};

app.get("/", (req, res) => {
  res.send("SocketO...");
});

io.on("connection", (socket) => {
  console.log("A user conected");

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
