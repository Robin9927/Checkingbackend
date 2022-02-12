const express = require("express");

const router = express.Router();

router.route("/hello").post((req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

module.exports = router;