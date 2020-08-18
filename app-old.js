const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });

    let salida = {
      nombre: "Jose",
      edad: 29,
      url: req.url,
    };

    res.write(JSON.stringify(salida));
    // res.write("hola mundo");
    res.end();
  })
  .listen(9090);

console.log("escuchando el puerto 9090");
