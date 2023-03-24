function attachEvents() {

    const inputField = document.getElementById('location')
    const getWeatherBtn = document.getElementById('submit')
    const baseURL = `http://localhost:3030/jsonstore/forecaster/`

    const forecastSection = document.querySelector('#forecast')
    const forecastCurrent = document.querySelector('#current')
    const forecastUpcoming = document.querySelector('#upcoming')


    const weatherSymbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176'   // °
    }

    getWeatherBtn.addEventListener('click', getWeather)

    function getWeather() {

        // Cleaning old wether data
        if (forecastSection.style.display == 'block') {
            let newDiv = document.querySelector('.forecasts')
            newDiv.remove()

            let newElForecastUpcoming = document.querySelector('.forecast-info')
            newElForecastUpcoming.textContent = ''

        }

        fetch(`${baseURL}locations`)
            .then(res => res.json())
            .then(res => {
               
                const targetCity = res.findIndex(c => c.name == inputField.value)

                if (targetCity == -1) {
                    throw new Error('error')
                }

                forecastSection.style.display = 'block'

                let targetCityCode = res[targetCity].code

                // Checking current weather 
                fetch(`${baseURL}today/${targetCityCode}`)
                    .then(res => res.json())
                    .then(res => {
                        let name = res.name
                        let condition = res.forecast.condition
                        let high = res.forecast.high
                        let low = res.forecast.low

                    // Crating TODAY 

                        // Crating the new elements
                        let newDiv = document.createElement('div')
                        newDiv.className = 'forecasts'
                        let newSpanConSym = document.createElement('span')
                        newSpanConSym.className = 'condition symbol'
                        let newSpanConUpper = document.createElement('span')
                        newSpanConUpper.className = 'condition'
                        // creating city, high, cond
                        let newElCity = document.createElement('span')
                        newElCity.className = 'forecast-data'
                        let newElHigh = document.createElement('span')
                        newElHigh.className = 'forecast-data'
                        let newElCond = document.createElement('span')
                        newElCond.className = 'forecast-data'
                            //creating icon
                        let newElIcon = weatherSymbols[condition]


                        //assigning  values
                        newElCity.textContent = name
                        newElHigh.textContent = `${low}°/${high}°`
                        newElCond.textContent = condition
                        newSpanConSym.innerHTML = newElIcon


                        // appending
                        forecastCurrent.append(newDiv)
                        newDiv.append(newSpanConSym)
                        newDiv.append(newSpanConSym)
                        newDiv.append(newSpanConUpper)
                        newSpanConUpper.append(newElCity)
                        newSpanConUpper.append(newElHigh)
                        newSpanConUpper.append(newElCond)


                    // Creating UPCOMING
                        let newElForecastUpcoming = document.createElement('div')
                        newElForecastUpcoming.className = 'forecast-info'
                        forecastUpcoming.append(newElForecastUpcoming)

                        fetch(`${baseURL}upcoming/${targetCityCode}`)
                            .then(res => res.json())
                            .then(res => {
                                
                                Object.entries(res.forecast).forEach(x => {
                                    
                                    //Creating the parent span
                                    let newElUpcomingSpan = document.createElement('span')
                                    newElUpcomingSpan.className = 'upcoming'

                                    //creating elements for data
                                    let newUpSpSym = document.createElement('span')
                                    newUpSpSym.className = 'symbol'
                                    let newUpSpHL = document.createElement('span')
                                    newUpSpHL.className = 'forecast-data'
                                    let newUpSpCon = document.createElement('span')
                                    newUpSpCon.className = 'forecast-data'

                                    //assigning values
                                    newUpSpHL.textContent = `${x[1].low}°/${x[1].high}°`
                                    newUpSpCon.textContent = `${x[1].condition}`
                                    newUpSpSym.innerHTML = weatherSymbols[`${x[1].condition}`]

                                    //appending
                                    newElUpcomingSpan.append(newUpSpSym)
                                    newElUpcomingSpan.append(newUpSpHL)
                                    newElUpcomingSpan.append(newUpSpCon)
                                    newElForecastUpcoming.append(newElUpcomingSpan)

                                })
                            })

                    })

            })
            .catch(err => {
                inputField.value = 'Error';
                forecastSection.style.display = 'none'
            })
    }
}

attachEvents()