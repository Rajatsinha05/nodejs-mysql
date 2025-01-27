
const bcrypt = require('bcrypt');
 require("dotenv").config()
const jwt = require('jsonwebtoken');
const hashPassword =async(password)=>{
    let passwordHash=await bcrypt.hash(password,10);
    return passwordHash
}

const generateToken = async(data)=>{
    let token = await jwt.sign(data,process.env.PRIVATE_KEY)
    return token
}



module.exports ={hashPassword,generateToken}