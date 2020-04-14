const jwt = require("jsonwebtoken");
const fs = require("fs");
const RSA_PUBLIC_KEY = fs.readFileSync("./keys/public.key");

let middleware = {};

middleware.verifyToken = function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Non-Authenticated");
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token==='null') {
        return res.status(401).send("Non-Authenticated");
    }

    try {
        let payload = jwt.verify(token, RSA_PUBLIC_KEY, {algorithms: 'RS256'});
        req.userId = payload.subject;
        next();
    } catch(err) {
        return res.status(401).send("Non-Authenticated");
    }
}

module.exports = middleware;