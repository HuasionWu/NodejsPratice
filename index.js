const server = require("./servers2");
const router = require("./router");
const requestHandles = require("./requestHandlers");

const handle = {};
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;


server.start(router.route,handle);