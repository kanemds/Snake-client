
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log(`logged in`);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
  net
};