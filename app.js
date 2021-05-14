//<=========== Import packages ==========>
const express = require("express");
const path = require("path");

const body_parser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const config = require("./dbConfig.js");


const app = express();
// Set Public
app.use(express.static(path.join(__dirname, "public")));

const con = mysql.createConnection(config);
const multerOption = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
});
const upload = multer({ storage: multerOption }).single("fileUpload");


//<=========== Middleware ==========>

app.use(body_parser.urlencoded({ extended: true })); //when you post service
app.use(body_parser.json());



//<=========== API services ==========>

//Login
app.post("/loginuser", function (req, res) {
    const email = req.body.email;
    const pass = req.body.pass;

    const sql = " SELECT user_id,email,role FROM usertable WHERE email=? AND pass=?";
    con.query(sql, [email, pass], function (err, result, fields) {
        if (err) {
            console.log(err)
            res.status(500).send("Server error");
        }
        else {
            const numrows = result.length;

            if (numrows != 1) {
                res.status(401).send("Login failed");
            }
            else {

                if (result[0].role == 2) {
                    res.send("/admin");
                }
                else if(result[0].role == 1){
                    res.send("/home");

                }
                else{
                    res.send("/doct");
                }
            }
        }
    });

});




//Welcome
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

//Admin
app.get("/admin", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/admin.html"))
});

//Patient
app.get("/patient", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/patient.html"))
});

//Doctor Table
app.get("/tabledoc1", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/tabledoc1.html"))
});

//Doctor Table
app.get("/tabledoc2", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/tabledoc2.html"))
});

//Doctor Table
app.get("/tabledoc3", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/tabledoc3.html"))
});

//Doctor Table
app.get("/tabledoc4", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/tabledoc4.html"))
});

//Doctor Confirm
app.get("/doccon", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/doccon.html"))
});

//Doctor Confirm
app.get("/myinfo", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/myinfo.html"))
});

//Patient Update
app.get("/patientupdate", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/patientupdate.html"))
});

//Counselor
app.get("/doct", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/doct.html"))
});

// Login Page
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

// Regis Page
app.get("/regis", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/regis.html"))
});

//Request
app.get("/request", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/request.html"))
});

//Counselor
app.get("/yourdoctor", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/yourdoctor.html"))
});

//Counselor1 Schedule
app.get("/checkdoc1", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/checkdoc1.html"))
});
//Counselor2 Schedule
app.get("/checkdoc2", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/checkdoc2.html"))
});

//Counselor3 Schedule
app.get("/checkdoc3", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/checkdoc3.html"))
});
//Counselor4 Schedule
app.get("/checkdoc4", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/checkdoc4.html"))
});
//Room Scedule
app.get("/schedule", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/table.html"))
});

//Room
app.get("/room", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/room.html"))
});

//Room (ADMIN)
app.get("/create", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/create.html"))
});

//Room (ADMIN)
app.get("/cregis", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/counregis.html"))
});

//Root
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home1.html"))
});





//<=========== Starting sever ==========>
const PORT = 50000
app.listen(PORT, function () {
    console.log("Sever is running at " + PORT);
});

