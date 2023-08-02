const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const Mydata = require('./model');
const jwt=require('jsonwebtoken')
const middleware=require('./middleware')


require('dotenv').config();

mongoose
  .connect('mongodb+srv://Naganna:Naganna890@cluster0.qhaksm0.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected!.....'))
  .catch((err) => console.log(err));

app.use(express.json()); // Parse JSON data in request body
app.use(cors({ origin: '*' }));

app.post('/addData', async (req, resp) => {
  const { email_Id, name, password, confirmpassword } = req.body;
  try {
    const Mydata1 = new Mydata({
      email_Id: email_Id,
      name: name,
      password: password,
      confirmpassword: confirmpassword,
    });
    await Mydata1.save();
    const mydata2 = await Mydata.find();
    return resp.json(mydata2);
  } catch (err) {
    console.log(err);
    return resp.status(500).send('Internal Server Error');
  }
});

app.get('/getData', async (req, resp) => {
  try {
    return resp.json(await Mydata.find());
  } catch (err) {
    console.log(err);
    return resp.status(500).send('Internal Server Error');
  }
});

app.delete('/delete/:id', async (req, resp) => {
  try {
    await Mydata.findByIdAndDelete(req.params.id);
    const mydata2 = await Mydata.find();
    return resp.json(mydata2);
  } catch (err) {
    console.log(err);
    return resp.status(500).send('Internal Server Error');
  }
});

app.get('/checkEmail/:email_Id', async (req, res) => {
  try {
    const email_Id = req.params.email_Id;
    const user = await Mydata.findOne({ email_Id: email_Id });
    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/register', async (req, resp) => {
  try {
    const { email_Id } = req.body;
    const exist = await Mydata.findOne({ email_Id });
    if (exist) {
      return resp.status(400).send('User already exists');
    }
    // Perform further registration steps here
  } catch (error) {
    console.log(error);
    return resp.status(500).send('Internal Server Error');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email_Id, password } = req.body;
  let exist=Mydata.findOne({email_Id});
  if(!exist){
    return res.status(400).send("User not found")
  }
  if(exist.password !== password){
    return res.status(400).send("Invalid Credentials")
  }
  let payload={
    user:{
      id:exist.id
    }
  }
    jwt.sign(payload,'jwtSecret',{expiresIn:36000000},
      (err,token)=>{
        if(err) throw err;
        return res.json({token})
      }
      )
});
app.get("/myprofile",middleware,async(req,res)=>{
  try {
    let exist=await Mydata.findById(req.user.id)
    if(!exist){
      return res.status(400).send("User not found")
    }
    res.json(exist);
  } catch (error) {
    console.log(error)
    return res.status(400).send("Server Error")
    
  }
})
app.get('/hello',(req,res)=>{
  res.send("Hello world")
})
app.listen(5000, () => console.log('Server is running....'));
