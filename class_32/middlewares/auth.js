const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../data/key');
exports.verify=(req,res,next)=>{
    jwt.verify(req.headers.token,SECRET_KEY,(err, decoded)=>{
if(err){
    res.send("auth failed!")
}else{
    console.log(decoded.email);
    next()
}
    })

}