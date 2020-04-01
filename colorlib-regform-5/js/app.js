const mysql=require('mysql');
const express=require('express');
const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practicaapl'
});
connection.connect(function(err){
  if(err){
    console.log("error");
  }else{
    console.log("connected");
  }
});

app.get('/', function(req,res){

  connection.query("SELECT * FROM users",function(error,rows,fields){
        if(error){
          console.log("Error in the query");
        }else{
          console.log("Sucess");
          console.log(rows);
        }
  });
  
});

function test(){
  let cc=document.getElementById('cc').value;
  let name=document.getElementById('name').value;
  alert(name);
}

function addUser(){
  let cc=document.getElementById('cc').value;
  /*let codigo=document.getElementById('codigo').value;
  let name=document.getElementById('name').value;
  let apellido=document.getElementById('apellido').value;

  

  let phone=document.getElementById('phone').value;
  let email=document.getElementById('email').value;*/

  connection.query("INSERT INTO `users` (cc, `codigo`, `nombre`, `apellido`, `member`, `student`, `profesor`, `administrative`, `phone`, `email`) VALUES (cc, '21313', 'sebastian', 'diaz', '1', '1', '0', '0', '23123', 'hotmail')")
}


app.listen(1337);
