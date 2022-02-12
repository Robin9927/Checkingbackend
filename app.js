const express = require("express")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
var port = 8000

const test = require("./routes/test")

app.use("/apis",test)

app.listen(port,()=>{
    console.log(`server is running on  ${port}`);
})