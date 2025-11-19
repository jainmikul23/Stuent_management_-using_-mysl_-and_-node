const router = require('express').Router();
const mysql = require('mysql2');

// DATABASE CONFIG
const cnn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'studd',
    user : 'root',
    password : 'Mikul0123@'
});

// HOME - SHOW ALL STUDENTS
router.get("/home", (req, res) => {
    const quStr = "SELECT * FROM student";

    cnn.query(quStr, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database Error");
        }

        res.render("home", { students: result });  // <-- correct
    });
});


// ADD STUDENT PAGE
router.get("/add", (req, res) => {
    res.render("addstudent");
});


// SAVE STUDENT
router.post("/save", (req, res) => {
    const { roll, name, branch, marks } = req.body;

    const quStr = "INSERT INTO student (roll, name, branch, marks) VALUES (?, ?, ?, ?)";
    
    cnn.query(quStr, [roll, name, branch, marks], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Insert Error");
        }

        res.redirect("/student/home");
    });
});


module.exports = router;
