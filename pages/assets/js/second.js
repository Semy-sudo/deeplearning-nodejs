var express = require('express');
var router = express.Router();
var qs = require("querystring");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const jsdom = require('mocha-jsdom');
var url = require('url');


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
            

                        <header id="header">
                            <div class="inner">
                                <a href="index.html" class="logo"><strong>Projection</strong> by SEMYSONG</a>
                                <nav id="nav">
                                    <a href="index.html">Home</a>
                                    <a href="generic.html">LOGIN</a>
                                    <a href="elements.html">JOIN</a>
                                </nav>
                                <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
                            </div>
                        </header>
            
                  
                        <section id="three" class="wrapper">
                            <div class="inner">
                                <header class="align-center">
                                    <h2>고양이 사료 계산기</h2>
                                    <p> 고양이 나이와 비만도로 적정 사료량계산하기 </p>
                                </header>
                                <div class="image round left">
                                    <img src="images/cat2.jpg" alt="Pic 01" />
                                </div>
                                <h3>적절한 고양이 사료 급여량 알기!</h3>
                                <p>‘적절한 양’을 결정하는 요인은 매우 다양하다. 고양이의 몸무게에서부터 고양이의 나이, 건식사료인지 습식사료인지, 고양이의 활동량, 임신 여부, 중성화 여부 등 다양한 요인에 의해서 결정된다. 심지어 고양이에게 먹이는 사료의 브랜드에 따라서 답이 달라진다. 영양이 풍부한 고급 건식 사료는 같은 양이라도 저렴한 사료보다 영양분이 많다. 따라서 고급 사료의 적정량이 더 적다. 적정한 사료 양은 고양이가 자람에 따라, 또한 건강 상태에 따라 달라진다. 고양이의 신진대사와 필요한 영양분이 달라지기 때문이다. 간단하게 고양이의 척추나 갈비뼈가 보인다면 너무 말랐다는 신호이다. 하지만 아무리 만져도 살에 파묻혀 척추나 갈비뼈가 보이지 않는다면 과체중이라는 신호이다. 이미 과체중인 고양이의 식단을 조절하는 것은 어렵다. 애초에 고양이의 건강을 위해 적절한 고양이 밥 양을 알아보자</p>
            
                                <div class="image round right">
                                    <img src="images/cat1.jpg" alt="Pic 02" />
                                </div>
                                <h3>고양이 사료, 어떤것이 좋을까?</h3>
                                <p>건식사료 혹은 습식사료 중 무엇을 선택하는지 역시 적절한 고양이 밥 양을 결정하는 중요한 요소이다. 고양이 식단은 육류, 어류 혹은 가금류와 같은 동물성 단백질로 구성되어야 한다. 고양이가 소화하기 힘든 식물성 단백질은 제한적인 것이 좋다고 알려져 있다. 또한, 탄수화물은 반드시 필요하지만 과도하게 섭취할 경우 비만을 유발한다. 수분을 제외한 DM기준으로 30%를 넘지 않아야 한다고 알려져 있다. 일반적으로는 건식사료를 자유롭게 배식하고, 하루에 1~2회 캔사료를 급여하기도 한다. 영양이 풍부한 건식사료의 경우 따로 캔사료를 급여할 필요가 없을 수 있다. 그러나 건사료에는 수분량이 적기 때문에 더 많은 물을 마실 수 있도록 해야한다. </p>
            
                                
            
                            </div>
                        </section>
            
                   
                        <footer id="footer">
                            <div class="inner">
            
                                <h3>식사량 계산기</h3>
            
                                <form action="second/second_process" method="post">
            
                                    <div class="field half first">
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
                                <option value="0.8">비만묘</option>
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
        var age = post.age;//가중치
        
        console.log("weight: ", weight);
        console.log("age:",age); //1~8까지 전달

        var kal = ((30*weight)+70)*age; //하루 열량
        var gram = (kal*1000)/5000; //하루 급여량
       
        console.log(kal);
        console.log(gram);
        response.redirect(`/second_2?kal=${kal}&gram=${gram}`); //url 로 전달하기
      
        
    });
  
      
    // request.on('end', function(){
        
        
    // });

    
   
   
 
  
    //response.redirect(`/second_2`); //url 로 전달하기
  });

  module.exports = router;