const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body;
  let savedData = await userModel.create(data);
  // console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
}catch(error){
  res.status(500).send({msg:error.message})
}
}

const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({status: false,msg: "username or the password is not corerct"});
  
  let token = jwt.sign({userId: user._id.toString(),batch: "lithium",organisation: "FunctionUp"},"functionup-lithium-prageet");
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}catch(error){
  res.status(500).send({msg:error.message})
}
}

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.status(200).send({ status: true, data: userDetails });
}catch(error){
  res.status(500).send({msg:error.message})
}
}

const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(401).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(204).send({ status: updatedUser, data: updatedUser });
}catch(error){
  res.status(500).send({msg:error.message})
}
}

const userPost = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.userId);
    const message = req.body.message;
    const updatedPost = user.posts;
    updatedPost.push(message);
    const updatedData = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPost },
      {
        new: true,
      }
    );
    res.status(201).send({ status: true, posts: updatedData });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.userPost= userPost
