const users = require("../models/user.model");

function userLogin(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users[username] && users[username].password == password) {
        res.status(200).json({status:"ok"});
    } else {
        res.status(200).json({status:"User not found"});
    }
}

module.exports = {
    userLogin,
};