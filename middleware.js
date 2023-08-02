const jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    try {
        let token=req.header('x-token');
        if(!token){
            return res.status(400).send("Invalid Not found")
        }
       let decode= jwt.verify(token,"jwtsecret")
       let payload={
        user:{
            id:exist.id
        }
       }
       req.user=decode.user
       next();
    } catch (error) {
        console.log(error)
        return res.status(500).send("Server Error")
    }
}
