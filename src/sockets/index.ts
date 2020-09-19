import { Socket, Server } from "socket.io";

export default function (io: Server) {

  io.on("connection", ( socket ) => {

    console.log("Someone is connected", socket.id);

    socket.on("addedComentary", () => {

      io.emit("getComentaries");

    });
    

  });

}
 

