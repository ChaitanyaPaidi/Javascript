const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect("mongodb+srv://admin:Admin_28@admin.r0gblrb.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res){
  const username = req.body.username;
  const passwod = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ username: username });

  if(existingUser){
    return res.status(400).send("Username already exists");
  }
  const user = new User({
    name: 'Harkirat Singh',
    email: 'tugrp@example.com',
    password: '123321'
  });

user.save();
  res,json({
    "msg": "User created successfully"
  });
})
