//init OpenWeather

const getWeather = new OpenWeather();

//init UI

const ui = new UI();

//Search city

const searchCity = document.querySelector('.searchCity');



// Add event Listener

searchCity.addEventListener('keyup' , (event) =>{

    // Get Input

    const userText = event.target.value;

    console.log(userText);

    // Make a request to OPen Weather API

    getWeather.search(userText).then(data => {
       
        // Temp Conversion
        const degC = data.main.temp - 273.15;
        const degCr = Math.floor(degC);
        const degF = degC * 1.8 + 32;
        const degFr = Math.floor(degF);
        
        results = {
            condition: data.weather[0].main,
            icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
            degCr: Math.floor(degCr),
            degFr: Math.floor(degFr),
            city: data.name
  
        }

        //Display Results

        ui.showResults(results);


    });

})