const JWT = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  try {
    //get token
    const token = req.headers["authorization"].split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: "Unauthorized User",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in auth api",
      error,
    });
  }
};
