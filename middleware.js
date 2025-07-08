module.exports = reqFilter = (req, res, next) => {
  if(!req.query.age) {
    return res.send("Please provide age.");
  }else if(req.query.age && req.query.age < 18) {
    return res.send("You are not allowed to access this page.");
  } else if(req.query.age && req.query.age >= 18) {
    console.log("You are allowed to access this page");
    next();
  } else {
    console.log("Age not provided");
  }
};