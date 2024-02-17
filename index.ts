import { buildEnvironment } from "./src/configs/environment";
import { HttpServer } from "./src/configs/server";

buildEnvironment()

const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;

new HttpServer(SERVER_PORT).setup();
