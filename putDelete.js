import http from "http";


const http = require("http");
const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/plain", "utf8");
    if(req.method === "PUT"){
        res.statusCode = 200;
        res.end("PUT-запрос обработан");

    }else if(req.method === "DELETE"){
        res.statusCode = 200;
        res.end("DELETE-запрос обработан");
    }
});
server.listen(3000, ()=>{
     console.log("Сервер запущен на порту 3000");
});