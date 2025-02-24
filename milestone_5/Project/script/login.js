document.getElementById('login-btn').addEventListener('click', 
    function(event){
       event.preventDefault();
       const accountNumber = document.getElementById('mobile-number').value;
       const pin = document.getElementById('pin').value;
       
       window.location.href='./main.html'
})