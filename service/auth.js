const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_KEY;

function setUser(user){ 
    return jwt.sign({
        id: user._id,
        email: user.email
    },secret); 
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }  catch(error){
        return null;
    }
    
}

module.exports = {
    setUser,
    getUser
};