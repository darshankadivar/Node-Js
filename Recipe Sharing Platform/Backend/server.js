const express = require("express")
const port = 1008

const app = express()
const db = require("../Backend/config/db")
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use("/user", require("../Backend/routes/userRoute"))
app.use("/recipe", require("../Backend/routes/recipeRoute"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${port}`)
})