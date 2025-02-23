document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            //console.log('button click')
            const pageTitleElement= document.getElementById('page-title')
            console.log(pageTitleElement)
            pageTitleElement.innerText = 'Update text here'
        })

document.getElementById('btn-login')
    .addEventListener('click', function(){
        const userInfo= document.getElementById('user-info');
        userInfo.innerText = 'user logged in success'
    }) 