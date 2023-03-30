// console.log('hello World!')

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //console.log(req.headers,req.method,req.url);
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/") {
      fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("data from the file", data);
        res.write("<html>");
        res.write('<head><title>Enter the message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write(
         ` <body>
            <form action="/message" method="POST">
              <input type="text" name="message" />
              <input type="submit" value="Submit" />
            </form>
          </body>`
        );
        res.write("</html>");
        return res.end();
      });
    } 
     else if (req.url === "/message" && req.method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        let parsedData = Buffer.concat(body).toString();
        console.log("parsedData>>>>>>", parsedData);
        const message = parsedData.split("=")[1];
        fs.writeFileSync("message.txt", message);
       
      });

      res.statusCode = 302;
        res.setHeader("Location", "/");
      return res.end();
    }

    // res.end();
    // process.exit();
  })
  .listen(3000);
