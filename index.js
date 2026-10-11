
import http from "http";

const server = http.createServer((req, res)=>{
    const authorization =req.headers["authorization"];
    console.log("Authorization:", authorization);
    res.setHeader("Content-Type", "text/plain");
    if(!authorization){
        res.statusCode = 401;
        res.end("Unauthorized");
        return;
    }
    res.statusCode = 200;
    res.end("Authorization header received");

});
server.listen(3000, ()=>{
    console.log("Сервер запущен на порту 3000")
});