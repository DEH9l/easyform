let logen = document.getElementById('login');
let passwort = document.getElementById('password');
let loginEnter = document.getElementById('loginEnter');
let passwordEnter = document.getElementById(`passwordEnter`);
let users = [];
const CARS = ['451', '451ED','453'];
document.getElementsByClassName('registerBtn')[0].addEventListener('click', function () {
    function checkNumInPass() {
        return passwort.value.split('').some(char => {
            return typeof parseInt(char) === 'number' && parseInt(char)
        });
    }
    function correctLogin() {
        return logen.value.length > 3;
    }
    function correctness() {
        return passwort.value.length > 3 && checkNumInPass();
    }
    if (!correctLogin()) {
        return alert('Логин должен состоять более чем из 3х символов');
    } else if (!correctness()) {
        return alert('Пароль должен состоять более чем их 3х символов и включать в себя хотябы одну цифру!')
    } else if (correctLogin() && correctness()) {
        function addUser() {
            users.push([`${logen.value}`, `${passwort.value}`]);
        }
        addUser();
        alert('Вы зарегистрировались!');
        document.getElementsByClassName('registerForm')[0].style.display = 'none';
        document.getElementsByClassName('loginForm')[0].style.display = 'flex';
    }
});
function loginFn() {
    users.map(item => {
        if (item[0] === loginEnter.value && item[1] === passwordEnter.value) {
            alert('Вы вошли');
            document.getElementsByClassName('loginForm')[0].style.display = 'none';
            return document.getElementsByClassName('smartSelect')[0].style.display = 'block';
        } else if (item[0] !== loginEnter.value) {
            return alert('Неверный логин');
        } else if (item[1] !== passwordEnter.value) {
            return alert('Неверный пароль');
        }
    })
}
document.getElementsByClassName(`loginBtn`)[0].addEventListener('click',loginFn,{"once": true} );
document.getElementsByClassName(`loginBtn`)[0].addEventListener('keydown',loginFn,{"once": true} );

let carSelect = document.getElementsByClassName('carSelect')[0];
document.getElementsByClassName('selectBtn')[0].addEventListener('click', function() {
    document.getElementsByClassName('garage')[0].innerHTML = `<img src="images/${CARS.filter(item => item === carSelect.value)}.jpg">`;
});

/*
let shkotInner = document.querySelector('.shkot');




shkotInner.addEventListener('click',shkotFn);


function shkotFn(event) {
 if(event.target.closest('.shkot-btn')){
     alert(event)
 }
}*/
