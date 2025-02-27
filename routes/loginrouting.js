const express = require("express");
const path = require("path");
const router = express.Router();
const get_main = (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/main.html"))
}

router.route("/").get(get_main);

module.exports = router;
