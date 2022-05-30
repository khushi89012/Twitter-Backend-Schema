

const express = require('express');
const User = require("../models/user.model");
const Twitter_id = require("../models/twiter.model")
const Tweets = require("../models/tweets.model")
const router = express.Router();



router.get('/user',async(req,res)=>{
  try{
    const user = await User.find().lean().exec()
    res.status(200).send(user)
  }
  catch(err){
    res.status(500).send(err)

  }
})


router.post("/post",async(req,res)=>{

    try{
        const user = await User.create(req.body)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post("/login",async(req,res)=>{
    try{
        const Id = await Twitter_id.create(req.body)

        return res.status(201).send({Id: Id})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
  

router.post("/tweets",async(req,res)=>{
    try{
        const tweet = await Tweets.create(req.body)

        return res.status(201).send({tweet: tweet})
    }catch(err){
        return res.status(400).send(err.message)
    }
})

router.delete("/tweets/:id",async(req,res)=>{
    try{
        const tweet = await Tweets.findByIdAndDelete(req.params.id)
        res.status(200).send(tweet)
    }catch(err){
        res.status(500).send(err)
    }
})






module.exports = router;

