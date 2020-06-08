const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "..", "..", "client", "public", "index.html"))
})
router.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "..", "..", "client", "public", "exercise.html"))
})
router.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "..", "..", "client", "public", "stats.html"))
})

module.exports = router