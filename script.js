
let formulaire = document.getElementById('form');

formulaire.addEventListener('submit', function (e) {

    let nom = document.getElementById('nom');
    let rgx_N = /^[a-zA-Z\s]+$/;
    let message = document.getElementById('message');

    let rgx_M = /^[a-zA-Z0-9\-\.\,\'\s]+$/;
    if (rgx_N.test(nom.value) == false) {
        let errorname = document.getElementById('errorname');
        errorname.innerHTML = 'Le nom est invalide'
        errorname.style.color = 'rgb(163, 0, 0)';
        e.preventDefault()
    } else {
        errorname.innerHTML = ''
    }
    if (rgx_M.test(message.value) == false) {
        let errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = "Le message est invalide";
        errorMessage.style.color = 'rgb(163, 0, 0)';
        e.preventDefault()
    } else {
        errorMessage.innerHTML = ''
    }

});