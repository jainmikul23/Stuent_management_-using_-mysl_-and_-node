const router = require('express').Router();
const mysql=require('mysql2');

// var students = [
//  { roll : 101 , name : "Vikas" , branch : "CS" , marks : 435.45},
//  { roll : 102 , name : "Pooja" , branch : "IT" , marks : 389.99}
// ];

// http://localhost:8989/student/home
router.get("/home",(request,response)=>
{
    // Database Record Fetch
    //DATABASE CONNECTION CREATE
    const cnn=mysql.createConnection({
        host :'localhost',
        port : 3306,
        database :'studd',
        user : 'root',
        password : 'Mikul0123@'
    });
    //query execute
    cnn.query("select * from student",(err,result,fields)=>{
        cnn.end();
        response.render('home',{students:result});
    });
});
router.get("/add",(request,response)=>
{
    response.render('addstudent');
});
router.post("/save",(request,response)=>
{
    const obj = request.body;
    // Database Insert 
    // students.push(obj);
    response.redirect("/student/home");
});

module.exports = router;