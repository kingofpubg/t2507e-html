//var hx = document.getElementById("box");
//hx.innerText = "Xin Chào Boss"; // change text
//hx.innerHTML = "<i>Xin chào tất cả mọi người</i>";
//hx.style.color ="blue";
//hx.style.marginBottom = "200px";
//hx.classList.remove("xyz");
//hx.classList.add("abc");
//hx.classList.add("you");

//var dv = document.getElementById("device");
//hx.innerText = "Bố Huy Vĩ Đại";
//hx.style.fontSize = "50px";
//var f = 14;
//var d = setInterval(function(){
 //   dv.style.fontSize = f + "px";
 //   f += 2;
//},1000);

var fan = document.getElementById("fan");
var angle = 0;


var fanbox = setInterval(function() {
//    angle += 3; // mỗi lần xoay thêm 10 độ
    fan.style.transform = `rotate(${angle}deg)`;
}, 1);