function attachEvents() {
    const baseURL = `http://localhost:3030/jsonstore/messenger`

    const allMessagesSection = document.getElementById('messages')
    const submitBtn = document.getElementById('submit')
    const refreshBtn = document.getElementById('refresh')
    const nameArea = document.querySelector('input[name="author"]')
    const messageArea = document.querySelector('input[name="content"]')


    submitBtn.addEventListener('click', () => {

        let messageObj = {
            author: nameArea.value,
            content: messageArea.value

        }

        fetch(baseURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageObj)
        })

        nameArea.value = ''
        messageArea.value = ''
    })

    refreshBtn.addEventListener('click', () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(res => {
                let finalMessage = ``

                Object.entries(res).forEach(pair => {
                    finalMessage += `${pair[1].author}: ${pair[1].content}\n`
                })

                allMessagesSection.textContent = finalMessage.trim()

            })
    })

}

attachEvents();