async function solution() {
    const mainSection = document.getElementById('main')

    //Getting the title data
    let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
    let data = await res.json()

    
    
    data.forEach(article => {
        let currArrTitle = article.title
        let currArrId = article._id

        //Creating new elements
        let newDiv1 = document.createElement('div')
        newDiv1.className = 'accordion'
        let newClassHead = document.createElement('div')
        newClassHead.className = 'head'
        let newSpanTitle = document.createElement('span')
        newSpanTitle.textContent = currArrTitle
        let newBtnMore = document.createElement('button')
        newBtnMore.className = 'button'
        newBtnMore.id = currArrId
        newBtnMore.textContent = 'More'
        let newClassForContent = document.createElement('div')
        newClassForContent.className = 'extra'
        let newPForContent = document.createElement('p')

        newBtnMore.addEventListener('click', moreClicked)

        //Appending
        mainSection.append(newDiv1)
        newDiv1.append(newClassHead)
        newClassHead.append(newSpanTitle)
        newClassHead.append(newBtnMore)
        newDiv1.append(newClassForContent)
        newClassForContent.appendChild(newPForContent)


        

    })

    async function moreClicked(e) {
        let moreBtn = e.target
        let clickedArrID = e.target.id 
       // console.log(clickedArrID);

        let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${clickedArrID}`)
        let data = await res.json()

        let content = data.content
  
        //Appending 
        let topDiv = e.target.parentElement.parentElement

        let newContent = topDiv.querySelector('p')
        newContent.textContent = content

        let newClassForContent = topDiv.querySelector('.extra')

        // topDiv.append(newClassForContent)
        // newClassForContent.append(newPForContent)

        newClassForContent.style.display = 'block'
        moreBtn.textContent = 'Less'
        moreBtn.removeEventListener('click', moreClicked )
        moreBtn.addEventListener('click', toggleShowHide)
        
    }

    function toggleShowHide(e) {
       // console.log(e);
        if (e.target.textContent == 'Less') {
        e.target.textContent = 'More'
        let partToHide = e.target.parentElement.parentElement.querySelector('div.extra')
        //console.log(partToHide);
        partToHide.style.display = 'none'
        } else {
            e.target.textContent = 'Less'
            let partToHide = e.target.parentElement.parentElement.querySelector('div.extra')
            console.log(partToHide);
            partToHide.style.display = 'block'
        }
    }
    
}

solution()