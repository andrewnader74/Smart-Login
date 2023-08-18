var Name = document.getElementById('Name');
var Email = document.getElementById('Email');
var Password = document.getElementById('Password');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function add() {
    if (Name.value == '' || Email.value == '' || Password.value == '') {
        document.getElementById('message').innerHTML = `<p class = 'text-center'>All inputs is required</p>`
    } else {
        var obj = {
            name: Name.value,
            email: Email.value,
            password: Password.value
        }
        user.push(obj);
        location.href = '../Sign in/index.html';
        localStorage.setItem('user', JSON.stringify(user));
    }
}