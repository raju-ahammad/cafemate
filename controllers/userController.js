const User = require('../models/userModel')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const validateLoginInput = require('../utils/validateLoginInput')
const validateRegisterInput = require("../utils/validateRegisterInput")
const keys = process.env.JWT_SECRET_KEY

const userController = {

    registerUser: (req, res) => {
     
      console.log("calling");
      User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            return res.status(400).json({ msg: "Email already exists" });
          } else {
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            }); 
            console.log(newUser);
      // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
          }
        });
      },
    loginUser: (req, res) => {
  
      const email = req.body.email;
      const password = req.body.password;
      
        User.findOne({ email }).then(user => {
          
          if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
          }
      
          bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              
              const payload = {
                id: user.id,
                name: user.name,
                isadmin: user.isadmin,
                isartist: user.isartist
              };
            
              jwt.sign(
                payload,
                keys,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    msg: "Sucessfully Login",
                    success: true,
                    token: "Bearer " + token,
                    user: payload
                  });
                }
              );
            } else {
              return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
          });
        });
      }    
   
}

module.exports = userController;

