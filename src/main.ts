import app from "./config/app";
import apiRoutes from "./routes";
import sockets from "socket.io";

import { createConnection } from "typeorm";
import initSockets from "./sockets";

function start() {
		
	//creating orm connection
	createConnection();

	//setting api routes
	app.use("/api/", apiRoutes);

	//init server
	const server = app.listen(app.get("port"), () => {
		console.log(` Server on port ${app.get("port")} `);
	});


	const io = sockets(server).listen(3001);

	initSockets(io);

}

//this is a fucking test comentary

start();



