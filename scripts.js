cerca.onclick = function (){
    let apiKey = '6dea526569544b42a7c23ff1c6dc21fb';
    let city = document.getElementById('weath').value;
    let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&lang=it'+'&units=metric';

    var request = new XMLHttpRequest();
    request.open('GET',uri, true);
    request.onload = function (){
        if (request.status >= 200 && request.status <400){
        var data = JSON.parse(this.response);
        var temp = data.main.temp;
        var desc = data.weather[0].description;
        var locationIcon = document.querySelector('.weather-icon');
        const icon = data.weather[0].icon;
        locationIcon.innerHTML = `<img src='http://openweathermap.org/img/wn/${icon}@2x.png'>`;
      //  temp = parseInt(temp);
        console.log(data);
        ris = document.getElementById('ris').innerHTML = `A ${city} ci sono ${temp} gradi. Le condizioni meteo riportano: ${desc}.`;
        }else {
            ris = document.getElementById('ris').innerHTML = `Controlla meglio cosa hai scritto che non posso avviare la ricerca`

        }
    }
    request.send();
};

