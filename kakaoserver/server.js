//server.js문서  노드서버 kakaoserver핵심
const express = require('express') ;
const bodyParser = require('body-parser') ;
const mysql = require('mysql2') ;
const cors = require('cors') ;

//express서버사용하기 위한 서버명명
const app = express()

//서버포트
const PORT = process.env.PORT | 5000 ;
app.use(cors()) ;
app.use(bodyParser.json())

//db접속
const db = mysql.createConnection({
  host: 'localhost' ,
  user: 'root' ,
  password : '1234' ,
  port : '3306' ,
  database: 'naver'
}) ;

//설정초기값기술후 접속 app.listen(1,2);
app.listen(PORT, ()=>{
  console.log(`server ok : http://localhost:${PORT}`);
});

db.connect((error)=>{
  if (!error){ console.log( 'db접속 성공 2-15  1:34 35분 ');}
  else{ console.log('db접속 실패 2-15 1:34 35분 ');  }
});


/*
create database naver ;
user naver ;

drop table react_boardreply;
drop table react_board;
create table react_board(
    id int auto_increment primary key,
    title varchar(20),
    name varchar(30),
    content varchar(30),
    wdate timestamp default now()
);

insert into react_board(title, name, content) values('spring', 'kim', 'one');
insert into react_board(title, name, content) values('summer', 'lee', 'two');
insert into react_board(title, name, content) values('winter', 'park', 'three');
commit;

select * from react_board;
commit;
desc react_board ;


drop table react_boardreply;
create table react_boardReply (
   num int auto_increment primary key,
   writer varchar(10) not null,
   memo varchar(20) not null, 
   board_id int,
   reg_date timestamp default now(),
   foreign key(board_id) references react_board(id) on delete cascade
);

commit ;
desc  react_boardReply ;

*/

/*
mysql> desc react_board ;
+---------+-------------+------+-----+-------------------+-------------------+
| Field   | Type        | Null | Key | Default           | Extra             |
+---------+-------------+------+-----+-------------------+-------------------+
| id      | int         | NO   | PRI | NULL              | auto_increment    |
| title   | varchar(20) | YES  |     | NULL              |                   |
| name    | varchar(30) | YES  |     | NULL              |                   |
| content | varchar(30) | YES  |     | NULL              |                   |
| wdate   | timestamp   | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+---------+-------------+------+-----+-------------------+-------------------+
웹브라우저 접근 http://localhost:5000/boardList/
npm i nodemon설치후  npm start대신   npm run dev 실행  
*/

//전체출력 가짜이름매핑 boardList 
app.get('/boardList', (req, res)=>{
  console.log('/boardList 처리');
  const  sql="select id,title,name,content, date_format(wdate,'%Y-%m-%d') 날짜 from  react_board  " ;
  db.query(sql, (err,data)=>{
      if(!err){
          res.send(data);
      }else{
          console.log('전체조회에러 발생 ', err);
          return res.status(500).send(err);
      }
  });
});


//mysql> select * from react_board  where id = 2  ;
//한건상세출력 가짜이름매핑 http://localhost:5000/boardView/2
//app.get(1매핑이름, 2쿼리문기술);
app.get('/boardView/:id', (req, res)=>{
  console.log('/boardView/:id 처리'); 
  const id = req.params.id; //꼭기술
  const sql = `select * from react_board where id = ${id}` ;
  db.query(sql, (err,data)=>{
    if(!err){
        res.send(data) ;
    }else{
      console.log('한건조회에러 발생 ', err );
      return res.status(500).send(err);
     }
  });
});

//mysql> insert into react_board(title,name,content) values( 'react', 'young', '리액트연습' ) ;
//한건 등록  http://localhost:5000/boardWrite
app.post("/boardWrite", (req,res)=>{
  console.log('/boardWrite신규처리');
  const {title, name, content} = req.body;
  const boardData = {title, name, content } ;
  
  if(!title || !name || !content ){
     console.log('제목,이름,내용 입력은 필수입니다');
     return res.status(400).send('제목,이름,내용 필수입력');
  }
  
  const sql = `insert into react_board set ? ` ;
  db.query(sql, boardData, (err,data)=>{ 
    if(err){  return res.status(400).send(err); }
    res.send('ok')
  });
});

// mysql> delete from react_board where id = 2 ;
// 한건삭제 http://localhost:5000/boardDelete/:id

app.get('/boardDelete/:id', (req, res)=>{
  console.log('/boardDelete/:id 처리');
  const id = req.params.id;

  if(!id){
    console.log('삭제할때 id가 필요합니다');
    return res.status(500).send('삭제시 id 필요합니다');
  }
  const sql = `delete from react_board where id = ${id}` ;

  db.query(sql, (err,result)=>{
    if(err){  return res.status(400).send(err); }
    if(result.affectedRows){ return res.status(500).send('삭제할 게시글이 존재하지 않습니다'); }
    res.send('ok');
  });
});



