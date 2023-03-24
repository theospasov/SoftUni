const { json } = require("stream/consumers")

function getInfo() {
    const inputValue = document.getElementById('stopId').value
    // console.log(inputValue);
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const checkBtn = document.getElementById('submit')

    const stopNameH = document.querySelector('#stopName')
    const busesListH = document.getElementById('buses')

    checkBtn.addEventListener('click', getReq())

    function getReq() {
        stopNameH.textContent = ''
        busesListH.textContent = ''
        
        fetch(`${baseURL}${inputValue}`)    
            .then((res) => res.json())
            .then((res) => {
                let nameOfStop = res.name 
                //console.log(nameOfStop);
                stopNameH.textContent = nameOfStop

                let busObj = res.buses
                for (const key in busObj) {
                    let currBus = (`Bus ${key} arrives in ${busObj[key]} minutes`);
                    let newBusEntry = document.createElement('li')
                    newBusEntry.textContent = currBus
                    busesListH.append(newBusEntry)

                }

                //console.log(busObj);
                
            })
            .catch((err) => {
                stopNameH.textContent = 'Error'
            })

        
    }

}