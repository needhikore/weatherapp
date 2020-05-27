class OpenWeather {

    constructor(){

        this.apikey = 'ec77fd3a87c7ed7464e8568e6d9469e3';
    }

    async search(cityName){

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);

        const results = await response.json();
        return results
    }
}