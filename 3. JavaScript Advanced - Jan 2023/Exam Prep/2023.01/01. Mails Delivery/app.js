// window.addEventListener('load', solve);


function solve() {

    // 0.Capture all Elements

        // 0.1 Capture Add Mails Div
            //0.1.1 Add Mails Section
            let recipientInput1 = document.getElementById('recipientName')
            let titleInput1 = document.getElementById('title')
            let messageInput1 = document.getElementById('message')

            let btnAddToTheList = document.getElementById('add')
            let btnReset = document.getElementById('reset')

            //0.1.2 List of Mails Section
            let sectionListOfMails = document.getElementById('list')

            let sectionSentMail = document.getElementById('sent-list')
            

    // 1. All fields are non-empty strings


        //1.1 Reset btn
        btnReset.addEventListener('click', (e)=> {
            e.preventDefault()
            if(recipientInput1.value != '' && titleInput1.value != '' && messageInput1.value != '' ) {
            recipientInput1.value = ''
            titleInput1.value = ''
            messageInput1.value = ''
            }
        })

        //1.2 Add to list btn
        btnAddToTheList.addEventListener('click', (e)=> {
            e.preventDefault()

            if(recipientInput1.value != '' && titleInput1.value != '' && messageInput1.value != '' ) {

              
            //1.2.1 Creating new elements
            
            newliEl1 = document.createElement('li')
            sectionListOfMails.appendChild(newliEl1)
            
            newh4El1 = document.createElement('h4')
            newh4El1.textContent = 'Title: ' + titleInput1.value
            newliEl1.appendChild(newh4El1)

            let newh4El2 = document.createElement('h4')
            newh4El2.textContent = 'Recipient Name: ' + recipientInput1.value
            newliEl1.appendChild(newh4El2)

            let newspanEl = document.createElement('span')
            newspanEl.textContent = messageInput1.value
            newliEl1.appendChild(newspanEl)

            let newdivEl = document.createElement('div')
            newdivEl.setAttribute('id', 'list-action')
            newliEl1.appendChild(newdivEl)

            let newbtn1 = document.createElement('button')
            newbtn1.setAttribute('type', 'submit')
            newbtn1.setAttribute('id', 'send')
            newbtn1.textContent = 'Send'
            newdivEl.appendChild(newbtn1)

            let newbtn2 = document.createElement('button')
            newbtn2.setAttribute('type', 'submit')
            newbtn2.setAttribute('id', 'delete')
            newbtn2.textContent = 'Delete'
            newdivEl.appendChild(newbtn2)

            }

            recipientInput1.value = ''
            titleInput1.value = ''
            messageInput1.value = ''


            // SEND BUTTON 
            let btnSend = document.getElementById('send')

            btnSend.addEventListener('click', (e) =>  {
               
                let newEl8SentMail8Li = document.createElement('li')
                let textUn = e.target.parentElement.parentElement
                console.log(textUn)
            

                


                
            })

        })


}
solve()