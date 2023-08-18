document.getElementById('userName').innerHTML = localStorage.getItem('userName');



document.getElementById('loginButton').addEventListener('click', function () {
    localStorage.removeItem('userName');
})