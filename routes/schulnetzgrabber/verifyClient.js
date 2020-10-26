const config = require("./config.json");

module.exports = function(req, res, next) {
    let token = req.body.token || req.query.token;

    if (token) {
        if (token === config.token) {
            next();
        } else {
            console.log("SNG: Wrong token: " + token);
            return res.json({"error": true});
        }
    } else {
        return res.status(403).send({
            "error": true
        });
    }
};