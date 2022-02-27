
const net = require("net");
const { resourceUsage } = require("process");
const connect = function() {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541
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