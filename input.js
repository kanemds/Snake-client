const handleUserInput = function(data,conn) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    conn.write("Move: up");
  }
  if (data === "a") {
    conn.write("Move: left");
  }
  if (data === "s") {
    conn.write("Move: down");
  }
  if (data === "d") {
    conn.write("Move: right");
  }
};
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data,conn);
  });
  return stdin;
};



// const setupInput = (conn) => {
//   connection = conn;
// };

module.exports = setupInput;