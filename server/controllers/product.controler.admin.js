var db = require("../database_mysql");
const bcrypt = require("bcrypt");

var signUp = function (req, res) {
  esm = req.body.name;
  db.query(
    `SELECT * From restaurant where name = "${req.body.name}" `,
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
            `INSERT INTO restaurant (name,password,picture) Values ("${req.body.name}","${hashedPaswword}","${req.body.picture}")`,
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.send("nice");
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

var login = (req, res) => {
  esm = req.body.loginName;
  db.query(
    `SELECT * FROM restaurant WHERE name = '${req.body.loginName}';`,
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

module.exports = { signUp, login };
