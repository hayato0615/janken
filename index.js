const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

//locallhost:3000の処理
app.get("/", (req, res) => {
const message = "入力してください";
const aa="相手の手は何かな";
res.render('show', {mes:message,mes2:aa});
});

//フォームが送信された時の処理
app.get("/top", (req, res) => {
let jj=Math.floor(Math.random()*3);
let aa=req.query.message;
let ss="";
let sss="";
if(aa==0){
if(jj==1){gg=" 勝ちです";}
if(jj==2){gg=" 負けです";}
if(jj==0){gg=" 引き分けです";}
}
if(aa==1){
if(jj==2){gg=" 勝ちです";}
if(jj==0){gg=" 負けです";}
if(jj==1){gg=" 引き分けです";}
}
if(aa==2){
if(jj==0){gg=" 勝ちです";}
if(jj==1){gg=" 負けです";}
if(jj==2){gg=" 引き分けです";}
}
if(jj==0){
  ss="グー";
}else if(jj==1){
  ss="チョキ";
}else{
  ss="パー";
}
res.rend

if(aa==0){
  sss="グー";
}else if(aa==1){
  sss="チョキ";
}else{
  sss="パー";
}
res.render('kekka',{mes:gg,mes2:"相手は "+ss+"でした",mes3:"(自分は"+sss+"でした)"});
});
app.use(function(req, res, next) {
res.status(404).send('ページが見つかりません');
});
app.listen(8080, () => console.log("Example app listening on port8080!"));