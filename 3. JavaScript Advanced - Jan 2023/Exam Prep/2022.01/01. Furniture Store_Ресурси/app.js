window.addEventListener('load', solve);

function solve() {
  

    let addButton = document.getElementById('add')

    addButton.addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('added')
        
        let modelInput = document.getElementById('model').value
        
        let yearInput = document.getElementById('year').value
        let descriptionInput = document.getElementById('description').value
        let priceInput = document.getElementById('price').value

        let targetSection = document.getElementById('furniture-list')

        if(typeof modelInput == 'string' && modelInput.length > 0 && typeof descriptionInput == 'string' && descriptionInput.length > 0 && yearInput == Number(yearInput) && yearInput > 0 && priceInput == Number(priceInput) && priceInput > 0) {
 

        // creating the taken elements - VISIBLE
        let visibleTr = document.createElement('tr')
        visibleTr.className = 'info'

        let modelInTable = document.createElement('td')
        modelInTable.textContent = modelInput
        visibleTr.appendChild(modelInTable)

        let priceInTable = document.createElement('td')
        priceInTable.textContent = (Number(priceInput)).toFixed(2)
        visibleTr.appendChild(priceInTable)

            // extra buttons in Table row
        let buttonsTr = document.createElement('td')

        let buttonTr1 = document.createElement('button')
        buttonTr1.className = 'moreBtn'
        buttonTr1.textContent = "More Info"
        buttonsTr.appendChild(buttonTr1)

        let buttonTr2 = document.createElement('button')
        buttonTr2.className = 'buyBtn'
        buttonTr2.textContent = "Buy it"
        buttonsTr.appendChild(buttonTr2)

        visibleTr.appendChild(buttonsTr)

        targetSection.appendChild(visibleTr)

        // creating the taken elements - HIDDEN
        let hiddenTableRow = document.createElement('tr')
        hiddenTableRow.className = 'hide'
        hiddenTableRow.style.display = 'none'

        

        let hiddenYear = document.createElement('td')
        hiddenYear.textContent = `Year: ${yearInput}`
        hiddenTableRow.appendChild(hiddenYear)

        let hiddenDescription = document.createElement('td')
        hiddenDescription.setAttribute('colspan', '3')
        hiddenDescription.textContent = `Description: ${descriptionInput}`
        hiddenTableRow.appendChild(hiddenDescription)

        targetSection.appendChild(hiddenTableRow)
        
        // PART ONE ONE - Delete the info from the fields
        
        let modelInputF = document.getElementById('model')
        modelInputF.value = ''
        let yearInputF = document.getElementById('year')
        yearInputF.value = ''
        let descriptionInputF = document.getElementById('description')
        descriptionInputF.value = ''
        let priceInputF = document.getElementById('price')
        priceInputF.value = ''

           

        // PART TWO
        let moreInfoButton = document.getElementsByClassName('moreBtn')[0]

        moreInfoButton.addEventListener('click', () => {
            if(moreInfoButton.textContent == 'More Info') {
            moreInfoButton.textContent = 'Less Info'
            hiddenTableRow.style.display = 'contents'
            } else {
                moreInfoButton.textContent = 'More Info'
            hiddenTableRow.style.display = 'none'
            }
        })

        // PART THREE
        let buyItButton = document.getElementsByClassName('buyBtn')[0]

        buyItButton.addEventListener('click', () => {
            let totalEl = document.getElementsByClassName('total-price')[0]
            totalEl.textContent = priceInTable.textContent
            visibleTr.remove()
            hiddenTableRow.remove()

        })
    }
       
    })

    

}
