let $container = (".current");
// let searchedCity = document.querySelector("#cityName");
let $dayCards = (".day-cards");
var cityInputEl = document.querySelector("#cityName");
var cityFormEl = document.querySelector("#cityForm");
var showCityResults = document.querySelector("#current");
const weatherApiKey = "6c70589989b1e76913777b068c5d1594";
const submitBtn = document.querySelector('#submit-btn');
var searchedName = document.querySelector('#cityResult');
let tempEl = document.querySelector('#tempResult');
let humidId = document.querySelector('#humResult');
let windId = document.querySelector('#windResult');
let uvId = document.querySelector('#uvResult');
let rainId = document.querySelector('#rainResult');

let tempResult = tempEl.innerHTML;
let humidResult = humidId.innerHTML;
let windResult = windId.innerHTML;
let uvResult = uvId.innerHTML;
let rainResult = rainId.innerHTML;

function handleSearchFormSubmit(e) {
    if (!cityInputEl.value) {
        return;
    }
    e.preventDefault();
    var search = cityInputEl.value.trim();
    console.log('search', search)
    searchedName.innerHTML = search;
    searchWeather(search)
    // fetchCorreds(search);
    cityInputEl.value ='';
}


function handleSearchFormSubmit(event) {
    event.preventDefault();

    var search = cityInputEl.value.trim();
    // if the city name is found in the Api call 
    if (cityName) {
        searchWeather(cityName);
    }
}

var firstCall = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedName}&limit=${1}&appid=${weatherApiKey}`

https://api.openweathermap.org/data/2.5/weather?q=Broome&appid=6c70589989b1e76913777b068c5d1594

cityFormEl.addEventListener('submit', handleSearchFormSubmit); 

function searchWeather(searchedName ) {
    let lat = GeolocationCoordinates.latitude ;
    let lon = GeolocationCoordinates.lonitude;
    let excludeParams = "minutely";
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${searchedName}lat=${lat}&lon=${lon}&exclude=${excludeParams}&appid=${weatherApiKey}`;
    //  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`;
    //  var apiUrl = `https://api.openweathermap.org/geo/1.0/weather?q=${cityName}&limit=5&appid=${weatherApiKey}&units=metric`;
    }


    function getWeather() {
        fetch (apiUrl)
        .then(function(response){
            if (response.ok){
                console.log(response);
                response.json().then(function(data){
                // ShowWeather(data.items);
                console.log(data);
                ShowWeather(data)
                });
            }
        //  return response.json();
        }) 
        .then (function(data){ 
            if (data){
            alert ('location not found')
            } else {
                console.log('data', data);
            }
        })
    }
// async function searchWeather() {
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`;
//     try {
//         let response = await fetch(apiUrl, {
//             method: 'GET',
//             mode: 'cors',
//             body: JSON.stringify(data) //body data type must match "content-type" 
//         });
//         console.log(response.status)
//         return await response.json();
//     } catch (error) {
//         console.log(error);
//     }
    // searchWeather('', {})
    // .then(data => {
    //     console.log(data);
    // });
// }

async function ShowWeather() {
    let cities = await searchWeather()
    let html = '';
    cities.forEach(searchedName => {
        let htmlSegment = `<div class="current" id="current">
                 <span><h2 id="cityResult">Atlanta (8/15/2019)</h2></span>
                
                    <ul>
                        <li><p>Temp:"${temp}"</p></li>
                        <li><p>Humidity:"${humidity}"</p></li>
                        <li><p>Wind Speed:"${wind}</p></li>
                        <li><p>UV Index:"${uvResult}"</p></li>
                        <li><p>Rain:"${rainId}"<></p></li>
                    </ul>
                
                </div>`;

                html += htmlSegment;
    });

    let container = document.querySelector('.current');
    container.innerHTML = html
}

ShowWeather();


// var callCity() = function(event) {
    // var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}' = cityName;
//     fetch(apiUrl)
//     .then(function(response) {
//         if(response.ok) {
//             console.log(response);
//             response.json().then(function(data){
//                 console.log(data);
//                 displayWeather(data, cityName);
//             });
//         } else {
//             alert('Error' + Response.statusText);
//         }
//     })
//     .catch(function(error){
//         alert('Unable to find City');
//     });
// };

// async function callCity() {
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={weatherApiKey}`);
//     let data = await response.json()
//     return data;
// }
