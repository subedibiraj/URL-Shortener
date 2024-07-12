const User = require('../model/user');
const {v4: uuidv4} = require('uuid')

async function handleCreateNewUser(req,res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.render('home');
}

async function handleUserLogin(req,res){
    const {email, password} = req.body;
    const user = await User.findOne({
        email,
        password
    });
    if(!user) return res.render('login',{
        err: "Invalid Email or Password!"
    });
    const sessionId = uuidv4();
    return res.redirect('/');
}


module.exports = {
    handleCreateNewUser,
    handleUserLogin
}