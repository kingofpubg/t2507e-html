var x;
x=10; // number
console.log(x);
x ="Xin chào"; // string
console.log(x);
x=true; // boolean
console.log(x); 

var n=20;
var s="hello";
var t=n+n; // phép cộng số - 40
var k = n+s; // phép cộng số với chuỗi - 20hello
var m=s+n; // phép cộng chuỗi với số - hello20

console.log(t);
console.log(k);
console.log(m);

if(t>30){

}else{

}
var xyz= t>30?"a":"b"; // toán tử 3 ngôi
// if(t>30){
//     xyz="a";
// }else{
//     xyz="b";
// }

for(var i=0;i<10;i++){
    // var ab="i=";
    // var bc=ab+i;
    // console.log(bc);
    console.log("i="+i);
}

var arr =[];
var abc=[1,2,"xin chào"];

arr[0]=10;
arr[1]=15;
arr.push(18); //arr[2]=18;
for(var i=0; i<arr.length;i++){
    console.log(arr[i]);
}

function tinhtong(a,b){
    // return a+b;
    console.log(a+b);
}

tinhtong(10,20);
tinhtong(5,15);
tinhtong(7,9);
tinhtong("a","b");
tinhtong([1,2,3],9); // lỗi cú pháp nhung vẫn chạy bình thường
tinhtong("a",6);

//alert("Cấm người dưới 18 tuổi"); 
//var check = confirm("Bạn đã đủ 18 tuổi hay chưa?"); // return true/false
//if(check==true){
    //alert("Bạn đã chọn yes");
//}else{
    //alert("Bạn đã chọn No");
//}

//prompt("Bạn bao nhiêu tuổi?"); //string "20"
//age = age +10; // 2010
// alert(age);
//age = parseInt(age);
//"20" => 20
//"20ab48" => 20
// "a80" => NaN : Not a Number
var lk= Math.random(); // tạo 1 số thực ngẫu nhiên từ 0 đến 1: 0<lk<1
lk= lk*100; // 0<lk<100
lk = parseInt(lk);

var num = prompt("Mời bạn chọn số từ 0 đến 100");
num = parseInt(num);
if(num==lk){
    alert("Chúc mừng bạn đã trúng thưởng");
}else{
    alert("Bạn đen như chó");
}
