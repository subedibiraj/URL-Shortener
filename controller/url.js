const shortid = require('shortid')
const Url = require('../model/url');

async function handleGetShortId(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({msg: "No url found!"});
    const shortId = shortid.generate();
    await Url.create({
        shortId : shortId,
        redirectUrl: body.url
    })
    
    return res.json({id:shortId});
}

module.exports = {
    handleGetShortId
}