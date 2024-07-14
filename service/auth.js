const jwt = require('jsonwebtoken');
const secret = 'process.env.JWT_KEY';

function setUser(user){
    return jwt.sign({
        id: user._id,
        email: user.email
    },secret);
}

function getUser(token){
    return jwt.verify(token,secret);
}

module.exports = {
    setUser,
    getUser
};