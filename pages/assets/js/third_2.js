var express = require('express');
var router = express.Router();
var qs = require("querystring");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const jsdom = require('mocha-jsdom');
var url = require('url');


//second_2
router.get('/',function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.kal);
    console.log(queryData.gram);
            
         
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
                              <h2>고양이 사료 계산기</h2>
                              <p> 고양이 나이와 비만도로 적정 사료량계산하기 </p>
                          </header>
                          
      
                      </div>
                  </section>
      
             
                  <footer id="footer">
                      <div class="inner">
      
                          <h3></h3>
      <h4>목표 몸무계: ${queryData.goalkal} kcal</h4></br>
      <h4>하루 권장 열량: ${queryData.kal} kcal</h4></br>
      <h4>하루 권장 급여량: ${queryData.gram} g</h4>
                              
                             
          
      </div>
                              </br></br>
                              <a href="/second">
                              <ul class="actions">
                                        <li><input value="돌아가기" class="button alt" type="submit"></li>
                                    </ul></a>
                         
                          
      
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

module.exports = router;