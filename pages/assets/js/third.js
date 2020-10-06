var express = require('express');
var router = express.Router();
var qs = require("querystring");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const jsdom = require('mocha-jsdom');
var url = require('url');


//localhost:8080/third
//second라고 쳤을때
router.get('/',function(request,response){

            
         
          var html = 
            `<!DOCTYPE HTML>

            <html>
                <head>
                    <title>Generic - Projection  TEMPLATED</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="assets/css/main.css" />
                </head>
                <body class="subpage">
            

            
                  
                        <section id="three" class="wrapper">
                            <div class="inner">
                                <header class="align-center">
                                    <h2>비만묘</h2>
                                    <p> BCS 수치 5 이상에 해당하는 비만묘 입니다 </p>
                    
                            </div>
                        </section>
            
                   
                        <footer id="footer">
                            <div class="inner">
            
                                <h3>식사량 계산기</h3>
            
                                <form action="third/third_process" method="post">
            
                                    <div class="field half first">
                                        <label for="weight">체중</label>
                                        <input name="weight" id="weight" type="text" placeholder="gram">
                                    
                                    
                                    
                                    <label for="age">과체중 비율</label>
                                <select name="age" id="age" name="age">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1.0">정상</option>
                                <option value="1.1">10% 과체중</option>
                                <option value="1.2">20% 과체중</option>
                                <option value="1.3">30% 과체중</option>
                                <option value="1.4">40% 과체중</option>
                    
                    
                                </select>
                
            </div>
                                    </br></br>
                                    <ul class="actions">
                                        <li><input value="계산하기" class="button alt" type="submit"></li>
                                    </ul>
                                </form>
            
                                
            
                            </div>
                        </footer>
            
                   
                        <script src="assets/js/jquery.min.js"></script>
                        <script src="assets/js/skel.min.js"></script>
                        <script src="assets/js/util.js"></script>
                        <script src="assets/js/main.js"></script>
            
                </body>
            </html>`
          
  
          //response.writeHead(200);//서버가 정상 처리하여 응답한 경우
          response.send(html);
      
        
  });
  
  router.post('/third_process',function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    var body = '';
    //request 객체는 readablestream 인터페이스를 구현하고있다
    //'data'와 'end'는 이벤트
    //request 객체에 on 함수로 data 이벤트를 연결
    var one = '';
    var two = '';
    request.on('data', function(data){
        body = body + data;
        var post = qs.parse(body);
       
        var weight = post.weight;//몸무게
        var age = post.age;//과체중 비율

        var kal = ((30*weight)+70)*8; //하루 열량
        var gram = (kal*1000)/5000; //하루 급여량
        
        console.log("weight: ", weight);
        console.log("age:",age); 

        var goalkal = weight/age; //목표몸무게
        
        

       
        console.log(goalkal);
        
        response.redirect(`/third_2?goalkal=${goalkal}&kal=${kal}&gram=${gram}`); //url 로 전달하기
      
        
    });
  
      
    // request.on('end', function(){
        
        
    // });

    
   
   
 
  
    //response.redirect(`/second_2`); //url 로 전달하기
  });

  module.exports = router;