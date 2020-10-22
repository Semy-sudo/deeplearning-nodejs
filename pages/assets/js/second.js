var express = require('express');
var router = express.Router();
var qs = require("querystring");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const jsdom = require('mocha-jsdom');
var url = require('url');
const db = require('../../../lib/db');

//localhost:8080/second
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
                                <h2>일반묘</h2>
                                <p> BCS 수치 5 이하에 해당하는 일반묘 입니다 </p>
                    
                            </div>
                        </section>
            
                   
                        <footer id="footer">
                            <div class="inner">
            
                                <h3>식사량 계산기</h3>
            
                                <form action="second/second_process" method="post">
            
                                    <div class="field half first">

                                    <label for="age">요일</label>
                                    <select name="day" id="day" name="day">
                                    <option value="" disabled selected>today</option>
                                    <option value="monday">월</option>
                                    <option value="tuesday">화</option>
                                    <option value="wednesday">수</option>
                                    <option value="thursday">목</option>
                                    <option value="friday">금</option>
                                    <option value="saturday">토</option>
                                    <option value="sunday">일</option>
                        
                                    </select>
                                
                                    <label for="weight">체중</label>
                                    <input name="weight" id="weight" type="text" placeholder="gram">
                                    
                                    
                                    
                                    <label for="age">해당사항을 체크하시오</label>
                                    <select name="age" id="age" name="age">
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="3.0">4 개월 미만</option>
                                    <option value="2.5">4~6 개월</option>
                                    <option value="2.0">7~12 개월</option>
                                    <option value="1.2">중성화한 성묘</option>
                                    <option value="1.4">일반 성묘</option>
                                    <option value="1.6">운동량이 많은 성묘</option>
                                    <option value="0.7">노묘</option>
                        
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
  
  router.post('/second_process',function(request,response){
        var weight = request.body.weight;//몸무게
        var age = request.body.age;//가중치
        var day = request.body.day;//요일
        console.log("weight: ", weight);
        console.log("age:",age); //1~8까지 전달
        console.log("day:",day); //월~금

        var kal = ((30*weight)+70)*age; //하루 열량
        var gram = (kal*1000)/5000; //하루 급여량
//해당 이메일 값에 넣어주도록
        db.query(
            `INSERT INTO kalcalender (${day})
      VALUES(?)
    `,
            [weight],
            function (error, result) {
              if (error) {
                throw error
              }
            }
          )
        

        
        console.log(kal);
        console.log(gram);
        console.log(request.user.email);
        response.redirect(`/second_2?kal=${kal}&gram=${gram}`); //url 로 전달하기
      
        
    });

   

  module.exports = router;