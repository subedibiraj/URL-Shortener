const shortid = require("shortid");
const Url = require("../model/url");

async function handlePostShortId(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "No url found!" });
  const shortId = shortid.generate();
  await Url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.render('home',{
    id: shortId
  });
}

async function handleGetShortId(req, res) {
  const shortid = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortId: shortid },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectUrl);
}


async function handleGetAnalytics(req,res){
    const result = await Url.findOne({
        shortId: req.params.shortId 
    })
    return res.json({
        totalClicks: result.visitHistory.length,
        visitHistory : result.visitHistory
    })
}


module.exports = {
  handlePostShortId,
  handleGetShortId,
  handleGetAnalytics,
};
