function forecast6h(ct){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){

        document.getElementById("city-6h").innerText = data.city.name;
        document.getElementById("temp-6h").innerText = data.list[2].main.temp;
        document.getElementById("hump-6h").innerText = data.list[2].main.humidity;
        document.getElementById("wind-6h").innerText = data.list[2].wind.speed;
        document.getElementById("icon-6h").src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;

    });
}
forecast6h("hanoi");

function forecast9h(ct){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){

        document.getElementById("city-9h").innerText = data.city.name;
        document.getElementById("temp-9h").innerText = data.list[3].main.temp;
        document.getElementById("hump-9h").innerText = data.list[3].main.humidity;
        document.getElementById("wind-9h").innerText = data.list[3].wind.speed;
        document.getElementById("icon-9h").src = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;

    });
}
forecast9h("hanoi");

function forecast12h(ct){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){

        document.getElementById("city-12h").innerText = data.city.name;
        document.getElementById("temp-12h").innerText = data.list[4].main.temp;
        document.getElementById("hump-12h").innerText = data.list[4].main.humidity;
        document.getElementById("wind-12h").innerText = data.list[4].wind.speed;
        document.getElementById("icon-12h").src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;

    });
}
forecast12h("hanoi");
