function solve() {

    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const textArea = document.querySelector('.info')
    let currentStop = null
    let nextStop = null

    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/'


    async function depart() {
        
        departBtn.disabled = true
        arriveBtn.disabled = false
        textArea.textContent = `Next stop X`

        if (currentStop == null) {
            currentStop = 'Depot'
            nextStop = '0361'
        } 

        try {
            // const res = await fetch(`${baseURL}${currentStop}`)
            // const data = await res.json()
            
            textArea.textContent = `Next stop ${currentStop}`
           // console.log(currentStop);
        } catch (error) {
            console.log('Error depart');
        }

        
    }

    async function arrive() {
        //console.log('Arrive TODO...');
        departBtn.disabled = false
        arriveBtn.disabled = true
        //textArea.textContent = `Arriving at ${currentStop}`

        try {
            textArea.textContent = `Arriving at ${currentStop}`


            const res = await fetch(`${baseURL}${nextStop}`)
            const data = await res.json()
            //console.log(currentStop);            
            
            currentStop = data.name
            nextStop = data.next
            //console.log(currentStop);
        } catch (error) {
            console.log('error arrive');
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();