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
    })

    refreshBtn.addEventListener('click', () => {
        fetch(baseURL)
        .then(res => res.json())
        .then(res => {
            allMessagesSection.textContent = res
        })
    })

}

attachEvents();