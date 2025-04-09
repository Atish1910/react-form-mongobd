const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://shubhlingayat2003:A66dvfjXUtX6Dv3x@ballrcluster.j2rx8up.mongodb.net/employee");


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is Running");
})