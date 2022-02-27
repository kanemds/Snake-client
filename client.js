
const net = require("net");
const { resourceUsage } = require("process");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Name:MVP");
    console.log("Successfully connected to game server");
    // conn.write("Move: up");
    // conn.write("Move: left");

  });

  return conn;
};



module.exports = {
  connect,
  net
};