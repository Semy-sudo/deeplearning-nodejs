var maria = require('mysql');

var db = maria.createConnection({
    host: "database-1.c8wcb57iia9j.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    database: "mariadb",
    password: "eja959595~",
    port: 3306
});

db.connect();

module.exports = db; //외부로 꺼내 쓸수 있다