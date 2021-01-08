cerca.onclick = function (){
    let apiKey = '';
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
cercaPoll.onclick = function (){
    let apiKey = '';
   // let city = document.getElementById('pollution').value;
    let lat = document.getElementById('lat').value;
    let lon = document.getElementById('lon').value;
    let uri = `http://api.openweathermap.org/data/2.5/air_pollution?lat=`+lat+`&lon=`+lon+`&appid=`+apiKey;
    //let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&lang=it'+'&units=metric';

    var request = new XMLHttpRequest();
    request.open('GET',uri, true);
    request.onload = function (){
      //  if (request.status >= 200 && request.status <400){
        var data = JSON.parse(this.response);
     //  var response = JSON.stringify(data.list[0].components);
     // ris = document.getElementById('resPoll').innerHTML = response ;
     var co = data.list[0].components.co;
     var no = data.list[0].components.no;
     var no2 = data.list[0].components.no2;
     var o3 = data.list[0].components.o3;
     var so2 = data.list[0].components.so2;
     var pm2_5 = data.list[0].components.pm2_5;
     var pm10 = data.list[0].components.pm10;
     var nh3 = data.list[0].components.nh3;

     document.getElementById('cores').innerHTML = co;
     document.getElementById('nores').innerHTML = no;
     document.getElementById('no2res').innerHTML = no2;
     document.getElementById('o3res').innerHTML = o3;
     document.getElementById('so2res').innerHTML = so2;
     document.getElementById('pm2_5res').innerHTML = pm2_5;
     document.getElementById('pm10res').innerHTML = pm10;
     document.getElementById('nh3res').innerHTML = nh3;



console.log(data.list[0].components.co);
        console.log(data.list[0].components);
 
    }
    request.send();
};
cercaC.onclick = function (){
    let apiKey = '';
   // let city = document.getElementById('pollution').value;
    let city = document.getElementById('namecity').value;
    let uri = `http://api.openweathermap.org/geo/1.0/direct?q=`+city+`&limit=5&appid=`+apiKey;
    //let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&lang=it'+'&units=metric';

    var request = new XMLHttpRequest();
    request.open('GET',uri, true);
    request.onload = function (){
        if (request.status >= 200 && request.status <400){
            var data = JSON.parse(this.response);
          //  var temp = data.main.temp;
          document.getElementById('foundedlat').innerHTML= `Latitudine: ${data[2].lat}`;
          document.getElementById('foundedlon').innerHTML= `Longitudine: ${data[2].lon}`;
console.log(data[2]);

        }else {
                ris = document.getElementById('ris').innerHTML = `Controlla meglio cosa hai scritto che non posso avviare la ricerca`
    
            }
        }
        request.send();
    };
