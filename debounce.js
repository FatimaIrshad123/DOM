const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
function calculatingsum(req,res,next){
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    //console.log(a);
    let sum = a+b
    res.send(sum.toString())
}

app.get('/',calculatingsum)

app.listen(3000)