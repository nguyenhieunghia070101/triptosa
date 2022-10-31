let loginBtn = document.querySelector('.login-btn');
let resetBtn = document.querySelector('.reset-btn');
let signUp = document.querySelector('.sign_up');

resetBtn?.addEventListener('click', () => {
    window.location = "/verification/reseted.html";
})

loginBtn?.addEventListener('click', () => {
    window.location = "/main/wall.html";
})

signUp?.addEventListener('click', () => {
    window.location = "/verification/signed.html";
})

