const express = require('express');
const { request } = require('http');
const db = require('../lib/db');
const router = express.Router();
const qs = require('querystring');

module.exports = function(passport){

router.post('/login',
  passport.authenticate('local',{
      successRedirect: '/',
      failureRedirect: '/login.html'
  })
);



router.post('/register',function(req,res){
  var post = req.body;
  console.log(post);
  console.log(post.catname);
  db.query(
      `INSERT INTO customer (catname,email, phone)
VALUES(?,?,?)
`,
      [post.catname, post.email, post.phone],
      function (error, result) {
        if (error) {
          throw error
        }
      }
    )

    db.query(
      `INSERT INTO kalcalender (email)
VALUES(?)
`,
      [post.email],
      function (error, result) {
        if (error) {
          throw error
        }
      }
    )
      return res.redirect('/');
});

  return router;
}

