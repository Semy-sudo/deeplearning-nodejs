const express = require('express');
const { request } = require('http');
const db = require('../lib/db');
const router = express.Router();
const qs = require('querystring');


router.post('/login',function(req,res){
    var catname = req.body.catname;
    var email = req.body.email;
    db.query('select * from customer where catname=\'' + catname + '\' and email=\'' + email + '\'', function (err, rows, fields) {
        if(!err){
            if(rows[0]!=undefined){
                res.redirect('/'); //메인화면으로 넘어가기
            }else{
                res.send('no data');
            }
        }else{
            res.send('error: '+err);
        }
    });  

});



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
        return res.redirect('/');
});




module.exports = router; //라우터를 모듈로 만든다