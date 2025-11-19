const express = require('express');

const studRouter = require('./routers/StudentRouter');

const server = express();
server.set('view engine','ejs');
server.use(express.urlencoded());

server.get("/",(request,response)=>
{
    response.redirect("/student/home");
});

server.use("/student",studRouter);

server.listen(8989,()=>{
    console.log("Server : http://localhost:8989");
})