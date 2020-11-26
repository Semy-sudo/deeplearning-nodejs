var express = require('express');
var session = require('express-session');
var app = express();

app.get('/', function(req, res){
    ​	if(req.session.authId)
    ​		res.send(authId+'님 로그인되었습니다');
    ​	else
    ​		res.send('로그인하세요!');
    });