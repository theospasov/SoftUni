function attachEvents() {
    
    const urlPosts = `http://localhost:3030/jsonstore/blog/posts`
    const urlComments = `http://localhost:3030/jsonstore/blog/comments`
    const loadPostsButton = document.getElementById('btnLoadPosts')
    const viewPostsButton = document.getElementById('btnViewPost')
    const postsMenu = document.getElementById('posts')
    const postBody = document.getElementById('post-body')
    const commentsBody = document.getElementById('post-comments')

    loadPostsButton.addEventListener('click', getPosts)
    viewPostsButton.addEventListener('click', viewPosts)

    function getPosts() {
        fetch(urlPosts)
        .then(res => res.json())
        .then(res => {
            Object.entries(res).forEach((post) => {
                let postTitle = post[1].title 
                let postId = post[1].id
                let postBody = post[1].body

                //Creating the new elements
                let newOption = document.createElement('option')
                newOption.value = postId
                newOption.textContent = postTitle.toUpperCase()

                postsMenu.append(newOption)
            })
        })

    }

    function viewPosts() {
        let selectedPostId = document.getElementById('posts').value
        let selectedPostBody = ''

        if (postBody.textContent != '') {
            postBody.textContent = ''
            commentsBody.textContent = ''
        }
        fetch(urlPosts)
        .then(res => res.json())
        .then(res => {
            Object.entries(res).forEach((post) => {
                let curPostTitle = post[1].title 
                let curPostId = post[1].id
                let curPostBody = post[1].body

                if (selectedPostId == curPostId ) {
                    selectedPostBody = curPostBody
                    
                    // Creating Post
                    let postHeading = document.getElementById('post-title')
                    postHeading.textContent = curPostTitle
                    let newP = document.createElement('p')
                    newP.id = 'post-body'
                    newP.textContent = curPostBody

                    //appending 
                    postBody.append(newP)
                } 
            })
        })

        fetch(urlComments)
        .then(res => res.json())
        .then(res => {
            Object.entries(res).forEach((comment) => {
                let curCommentId = comment[1].id 
                let curCommentPostId = comment[1].postId
                let curCommentText = comment[1].text

                
                
                if (selectedPostId == curCommentPostId) {
                    
                    //Creating new elements
                    let newComment = document.createElement('li')
                    newComment.id = curCommentId
                    newComment.textContent = curCommentText

                    //appending
                    commentsBody.append(newComment)
                }
            })
        })
    }
}

attachEvents();