var db = require("../database_mysql");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

var signUpUser = function (req, res) {
  db.query(
    `SELECT * From user where email = "${req.body.email}" `,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.length === 0) {
        if (
          req.body.password.length > 8 &&
          req.body.password.length < 25 &&
          req.body.password.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
          )
        ) {
          const salt = bcrypt.genSaltSync();
          const hashedPaswword = bcrypt.hashSync(req.body.password, salt);
          db.query(
            `INSERT INTO user (firstName,lastName ,email,password,phoneNumber,profilePicture) Values ("${req.body.firstName}","${req.body.lastName}","${req.body.email}","${hashedPaswword}","${req.body.phoneNumber}","${req.body.profilePicture}")`,
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.send("nice");
                sendconfirmation(
                  req.body.email,
                  req.body.firstName,
                  req.body.lastName
                );
              }
            }
          );
        } else {
          res.send("please enter a strong password");
        }
      }
    }
  );
};

var loginUser = (req, res) => {
  esm = req.body.loginNameUser;
  db.query(
    `SELECT * FROM user WHERE email = '${req.body.loginEmail}';`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        var pass = result[0];
        if (bcrypt.compareSync(req.body.loginPassword, pass.password)) {
          res.send("nice");
        } else {
          res.send("incorrect");
        }
      }
    }
  );
};

module.exports = {
  signUpUser,
  loginUser,
};
