
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

function searchWeather(cityName) {
    var options = {
        timeout: 10000,
        enableHighAccuracy: true
    };
    
    function getWeather(searchedName) {
        let 

        const lon = 
    }

}
