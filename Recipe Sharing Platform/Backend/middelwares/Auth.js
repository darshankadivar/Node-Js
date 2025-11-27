const jwt = require("jsonwebtoken")

module.exports.checkAuth = (req,res,next) => {
    let token = req.header("Authorization")

    if (!token) {
        return res.status(401).json({msg: "Token not found"})
    }

    let newToken = token.slice(7 ,token.length)

    let decoded = jwt.verify(newToken, "zxc")

    req.user = decoded

    next();
}