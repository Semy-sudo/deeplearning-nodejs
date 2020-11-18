const express = require('express');
const router = express.Router(); 

router.use(express.static('css'));
router.use(express.static('pages'));
router.use(express.static('dataset'));




router.get('/',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/index.html')); //이렇게 응답해준다
});
router.get('/fat.html',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/fat.html')); //이렇게 응답해준다
});

//종분류 
router.get('/my_model/model.json',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model/model.json')); //이렇게 응답해준다
});
router.get('/my_model/metadata.json',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model/metadata.json')); //이렇게 응답해준다
});
router.get('/my_model/weights.bin',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model/weights.bin')); //이렇게 응답해준다
});

//감정분류
router.get('/my_model_1/model.json',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model_1/model.json')); //이렇게 응답해준다
});
router.get('/my_model_1/metadata.json',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model_1/metadata.json')); //이렇게 응답해준다
});
router.get('/my_model_1/weights.bin',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/my_model_1/weights.bin')); //이렇게 응답해준다
});


// app.get('/cnn.html',function(request,response){ //요청을 받으면
//     response.sendFile(path.join(__dirname+'/pages/cnn.html')); //이렇게 응답해준다
// });

//////파일 로드하기
router.get('/dataset/Bengal/3.jpg',function(request,response){
    response.sendFile(path.join(__dirname+'/dataset/Bengal/3.jpg')); 
});

router.get('/dataset/Bengal/4.jpg',function(request,response){
    response.sendFile(path.join(__dirname+'/dataset/Bengal/4.jpg')); 
});


router.get('/first.html',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/pages/first.html')); //이렇게 응답해준다
});

router.get('/first_camera.html',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/pages/first_camera.html')); //이렇게 응답해준다
});

router.get('/calender.html',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/pages/calender.html')); //이렇게 응답해준다
});

router.get('/alarm.html',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/pages/alarm.html')); //이렇게 응답해준다
});

//정상고양이 계산
var secondRouter = require('../pages/assets/js/second');
router.use('/second',secondRouter);

var second_2Router = require('../pages/assets/js/second_2');
router.use('/second_2',second_2Router);

//비만고양이 계산
var thirdRouter = require('../pages/assets/js/third');
router.use('/third',thirdRouter);

var third_2Router = require('../pages/assets/js/third_2');
router.use('/third_2',third_2Router);



module.exports = router //묘듈화