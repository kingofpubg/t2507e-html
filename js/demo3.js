function demo1(){
    alert("Có Shit");
}
// onclick : nối sự kiến đến chức năng

function demo2(){
    alert("abcdxyznmasad=)))");
}
var flag = false;
var fanbox = null;

function startFan(h){
    if(flag == false){
        var fan = document.getElementById("fan");
        var angle = 0;

        fanbox = setInterval(function() {
            angle += 10; // mỗi lần xoay thêm 10 độ
            fan.style.transform = `rotate(${angle}deg)`;
        }, 50);

        // var btn = document.getElementById("btn-fan");
        h.innerText = "Stop";
        flag = true;
    }else{
        clearInterval(fanbox);
        h.innerText = "Start";
        flag = false;
    }
    
}

