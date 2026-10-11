import http from "http";
import fs from 'fs';

const server = http.createServer((req,res)=>{
    try{
        throw new Error("Тестовая ошибка сервера");

    }catch(error){
       const log = `${new Date().toISOString()} - ${error.message}\n`;
       fs.appendFile("errors.log", log, (err)=>{
       if(err){
        console.error("Ошибка записи лога:", err);
       }
       }) ;
    }
    res.statusCode = 500;
    res.setHeader("Content-type", "text/plain");
    res.end("Internal Server Error");
});

server.listen(3000, ()=>{
    console.log("Сервер запущен на порту 3000")
});
