function lockedProfile() {

    const mainDiv = document.querySelector('#main')
    const templateProfile = document.querySelector('.profile')
    templateProfile.remove()

    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
    .then(res => res.json())
    .then(res => {
       
        Object.entries(res).forEach((e, index) => {
            let username = e[1].username
            let email = e[1].email
            let age = e[1].age

            //Creating new Profiles
            let newProfile =  document.createElement('div')
            newProfile.className = 'profile'
            newProfile.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index+1}Locked" value="lock" checked="">
            <label>Unlock</label>
            <input type="radio" name="user${index+1}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index+1}Username" value=${username} disabled="" readonly="">
            <div id="user${index+1}HiddenFields">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${index+1}Email" value=${email} disabled="" readonly="">
            <label>Age:</label>
            <input type="email" name="user${index+1}Age" value=${age} disabled="" readonly="">
            </div>
            </div>`

            mainDiv.append(newProfile)

            //Creating the Show More / Less Button
            let newBtnShowHide = document.createElement('button')
            newBtnShowHide.textContent = 'Show more'
            newBtnShowHide.addEventListener('click', showMore)
            newProfile.append(newBtnShowHide)

            // Hiding part of the profile
            let contentToHide = document.getElementById(`user${index+1}HiddenFields`)
            contentToHide.style.display = 'none'


        })
    })
    .catch(err => console.log(err))

    //Status - Locked
    function showMore(event) {
        let lockedStatus = event.target.parentElement.querySelector('input[value="lock"]')
        
        if(!lockedStatus.checked ) {
        
            let contentToUnhide = event.target.parentElement.querySelector('div')
            contentToUnhide.style.display = 'block'
            let  showMoreBtn = event.target
            showMoreBtn.textContent = 'Hide it'

            showMoreBtn.removeEventListener('click', showMore)
            showMoreBtn.addEventListener('click', hideIt)
        }        
    }

    //Status - Unlocked
    function hideIt(event) {
        let lockedStatus = event.target.parentElement.querySelector('input[value="lock"]')
        if(!lockedStatus.checked ) {
        let contentToUnhide = event.target.parentElement.querySelector('div')
        contentToUnhide.style.display = 'none'

        let  showMoreBtn = event.target
        showMoreBtn.textContent = 'Show More'

        showMoreBtn.removeEventListener('click', hideIt)
        showMoreBtn.addEventListener('click', showMore)
        }

    }

}