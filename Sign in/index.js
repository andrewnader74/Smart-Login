var user = [];
user = JSON.parse(localStorage.getItem('user'))

var Email = document.getElementById('email');
var Password = document.getElementById('Password');




document.getElementById('login').addEventListener('click', function () {
    if (Email.value == '' || Password.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        checkUser();
    }
})


function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (Email.value == user[i].email && Password.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../Home/index.html';
        }
    }
}