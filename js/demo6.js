function forecast(){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){
        // đọc và sử dụng dữ liệu nhận về từ api
        var list= data.list; // array forecase weather
        var forecast_html = "";
        for(var i=0;i<list.length;i++){
            forecast_html += `
                <div class="col-12 col-md-6 col-xl-3 mt-3">
                    <div class="item">
                        <h3>${list[i].dt_txt}</h3>
                        <h2>${list[i].main.temp}<sup>o</sup>C</h2>
                        <p>${list[i].weather[0].description}</p>
                        <img src="https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png"/>
                    </div>
                </div>
            `;
        }
        document.getElementById("forecast").innerHTML = forecast_html;
    });
}
forecast();