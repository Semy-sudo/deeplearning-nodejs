module.exports = function (app,db){
    
    var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());//passport를 express에 설치
app.use(passport.session());//내부적으로session

//로그인 성공시 세션 안에 user 에 식별자 저장하는 역활
passport.serializeUser(function(user,done){
    console.log('serializeUser',user);
  
    done(null,user); //식별자가 session 에 저장됨
    
});

//sesion에 저장된 값 이용해서, http request의 리턴
//인증후, 페이지 접근시 마다 사용자 정보를 session에서 읽어옴
//조회한 정보를 req.user에 저장
passport.deserializeUser(function(id, done) {
    console.log('deserializeUser id:',id);
    done(null,id); //req.user가 됨
    // User.findById(id, function(err, user) {
    //     done(err, user);
    //   });
});



passport.use(new LocalStrategy({
        usernameField: 'catname',
        passwordField: 'email',
        session: true,
        passReqToCallback: true
    },function(req,catname,email,done) {
        console.log('LocalStrategy',catname,email);
        
        var query = db.query('select * from customer where email=?',[email], function(err,rows){
    
            if(err) return done(err);
            if(rows.length){
              return done(null,{'catname':catname,'email':email})
            }else{
              return done(null, false, {'message':'your login info is not found'});
            }
          })
    }
    
));


return passport;
}
