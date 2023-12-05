import dotenv from "dotenv";
dotenv.config();
import http from "http";

//creating http server to listen requests
var server = http.createServer((req, res, next) => {
    //handling default GEt request
    if (req.url == "/") {
        res.write("Hello world");
        res.end();
    }
});

//started server to a specific PORT number
server.listen(process.env.PORT); // please specify PORT number in .env file
console.log(`Server started at ${process.env.PORT}`);

//exporting server to use in another file
export default server;