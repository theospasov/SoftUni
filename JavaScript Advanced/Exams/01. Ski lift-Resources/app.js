window.addEventListener('load', solve);

function solve() {

    // Taking major elements
    let firstNameInput = document.getElementById('first-name')
    let lastNameInput = document.getElementById('last-name')
    let numberOfPeopleInput = document.getElementById('people-count')
    let fromDateInput = document.getElementById('from-date')
    let daysInput = document.getElementById('days-count')

    let btnNextStep = document.getElementById('next-btn')

    let sectionPreviewUL = document.getElementsByClassName('ticket-info-list')[0]

    let sectionConfirmUL = document.getElementsByClassName('confirm-ticket')[0]

    //0

    btnNextStep.addEventListener('click', (e) => {
        e.preventDefault()
        if(firstNameInput.value == '' || lastNameInput.value == '' || numberOfPeopleInput.value == '' || daysInput.value == '' || fromDateInput.value == '' ) {
            return
        } 

        let name = firstNameInput.value
        let lastName = lastNameInput.value
        let numberOfPeople= numberOfPeopleInput.value
        let fromDate = fromDateInput.value
        let days = daysInput.value

        sectionPreviewUL.innerHTML = `<li class="ticket">
        <article>
            <h3>Name: ${name} ${lastName}</h3>
            <p>From date: ${fromDate}</p>
            <p>For ${days} days</p>
            <p>For ${numberOfPeople} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
        </li>`

        /// Clear input
        firstNameInput.value = ''
        lastNameInput.value = ''
        numberOfPeopleInput.value = ''
        fromDateInput.value = ''
        daysInput.value = ''

        btnNextStep.disabled = true

        // TARGETING NEW BUTTONS
        let btnEdit = document.getElementsByClassName('edit-btn')[0]
        let btnContinue = document.getElementsByClassName('continue-btn')[0]

        btnEdit.addEventListener('click', (e)=> {

            let targetValues = document.getElementsByTagName('article')

            let name = document.querySelectorAll('article h3')[0].textContent.substring(6).split(' ')

            let firstName = name[0]
            let lastName = name[1]

            let numberOfPeople= document.querySelectorAll('article p')[2].textContent.substring(4).split(' ')[0]
            

            let fromDate = document.querySelectorAll('article p')[0].textContent.substring(11)

            let days = document.querySelectorAll('article p')[1].textContent.substring(4).split(' ')[0]

            firstNameInput.value = firstName
            lastNameInput.value = lastName
            numberOfPeopleInput.value = numberOfPeople
            fromDateInput.value = fromDate
            daysInput.value = days

            btnNextStep.disabled = false

            let previewLi = document.getElementsByClassName('ticket')[0]
            previewLi.remove()
            


        })

        btnContinue.addEventListener('click', (e)=>{

            
            
            btnEdit.remove()
            btnContinue.remove()

            let newElLi = document.createElement('li')
            newElLi.className = 'ticket-content'
            let previewInfo = document.getElementsByTagName('article')[0]
            newElLi.appendChild(previewInfo)

            let newElBtn1 = document.createElement('button')
            newElBtn1.className = 'confirm-btn'
            newElBtn1.textContent = 'Confirm'

            let newElBtn2 = document.createElement('button')
            newElBtn2.className = 'cancel-btn'
            newElBtn2.textContent = 'Cancel'

            newElLi.appendChild(newElBtn1)
            newElLi.appendChild(newElBtn2)

            sectionConfirmUL.appendChild(newElLi)

            let rogueEl = document.getElementsByClassName('ticket')[0]
            rogueEl.remove()

            newElBtn2.addEventListener('click', ()=> {
                let sectionToDelete = document.getElementsByClassName('ticket-content')[0]
                sectionToDelete.remove()
                btnNextStep.disabled = false

            })

            newElBtn1.addEventListener('click', ()=> {
                let sectionToRemove = document.getElementById('main')
                sectionToRemove.remove()

                let newElH1 = document.createElement('h1')
                newElH1.setAttribute('id', 'thank-you')
                newElH1.textContent = `Thank you, have a nice day!`

                let newElBtns1 = document.createElement('button')
                newElBtns1.setAttribute('id', 'back-btn')
                newElBtns1.textContent = `Back`

               // let bodyEl = document.getElementsByTagName('body')
                body.appendChild(newElH1)
                body.appendChild(newElBtns1)

                newElBtns1.addEventListener('click', ()=> {
                    window.location.reload()
                })

            })
            
        })


    })
    
   
}


    
    
