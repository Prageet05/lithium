const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    try{
    let token = req.headers["x-auth-token"];
    if(!token) {
    return res.status(404).send({status: false,msg:"token must be present"})
    }
    let decodedToken = jwt.verify(token,"functionup-lithium-prageet")
    if(!decodedToken){
        return res.status(401).send({status: false, msg: "token is invalid"})
    }
    req.loggedInUser = decodedToken.userId
    next()
}catch(error){
    res.status(500).send({msg:"access denied"})
}
}

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    try{
    let checkAuthorise = req.params.userId
    if(checkAuthorise !== req.loggedInUser){
        return res.status(403).send({status: false, msg: "permission denied"})
    } 
    next()
}catch(error){
    res.status(500).send({msg:error.message})
}
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise