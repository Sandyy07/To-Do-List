const express =require("express");
const bodyparser =require("body-parser");
const date=require(__dirname +"/views/date.js");

const app=express();
  var items=["Do WEB DEV Course","Prac For MTE","Start MATH"];
  var workItems=[];

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


app.get("/",function(req,res){

let day=date.getDate();
res.render("lists.ejs",{listTitle:day ,newListItems:items});
});

app.post("/",function(req,res){
  let item=req.body.newItem;
if(req.body.list === "Work List"){
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}



})

app.get("/work",function(req,res){
res.render("lists.ejs",{listTitle:"Work List" ,newListItems:workItems});

});

app.get("/about",function(req,res){
  res.render("about.ejs");
})
app.listen(3000,function(){
  console.log("Server is Running");
});






// var day="";
// var currentDay=today.getDay();
// if(today.getDay()==6 || today.getDay()==0){
// day="weeknd";
  // res.write("<h1>WEEKND HE ENJOY KARO</h1>");
  // res.write("play sing code");


// switch (currentDay) {
//   case 0:
//     day="Sunday";
//     break;
//     case 1:
//       day="Monday";
//       break;
//       case 2:
//         day="Tuesday";
//         break;
//         case 3:
//           day="Wednesday";
//           break;
//           case 4:
//             day="Thursday";
//             break;
//             case 5:
//               day="Friday";
//               break;
//               case 6:
//                 day="Saturday";
//                 break;
//   default:
//   console.log("ERROR current day no is "+ currentDay);
// }
// }else{
//   // res.write("<h1>WEEK DAY LOLZ</h1>");
//   //   res.write("well back to work");
//   //   res.send();
//
//     day="weekday";
//
//   // res.sendFile(__dirname+"/index.html");
// }
