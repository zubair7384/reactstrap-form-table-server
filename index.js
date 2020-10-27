const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); // allows us to access the req.body

//Routs//

// create

app.post("/tform", async (req, res) => {

    try {
        const { name, email, password, text } = req.body;
        const newForm = await pool.query("INSERT INTO formtable (name, email, password, text) VALUES ($1, $2, $3, $4)", [name, email, password, text])
        res.json(newForm);
        console.log(req.body)

    } catch (err) {
        console.error(err.message);
    }

})

// get

app.get("/tform", async (req, res) => {

    try {

        const allVal = await pool.query("SELECT * FROM formtable")
        res.json(allVal.rows);

    } catch (err) {
        console.error(err.message);
    }

})

// Delete 

app.delete("/tform/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const row = await pool.query("DELETE FROM formtable WHERE id = $1", [id])
        res.json("Todo deleted successfully");

    } catch (err) {
        console.error(err.message);
    }

})

app.listen(5000, () => {
    console.log("server is runnning on port 5000")
})