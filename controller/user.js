const User = require('../model/user');
const {setUser} = require('../service/auth');

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
    const token = setUser(user);
    // res.cookie("uid",token);
    return res.json({token});
}


module.exports = {
    handleCreateNewUser,
    handleUserLogin
}