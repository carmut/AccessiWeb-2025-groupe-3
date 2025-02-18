let form = document.querySelector('#form');
let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let email = document.querySelector('#email');
let ckeckbox = document.querySelector('#check');
let error = document.querySelector('#error');
let succes = document.querySelector('#succes');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    error.innerHTML = '';
    succes.innerHTML = '';


    if (nom.value === '') {
        let p = document.createElement('p');
        p.innerText = 'Veuillez renseigner votre nom';
        error.appendChild(p);
    }
    
    if (nom.value.length < 3) {
        let p = document.createElement('p');
        p.innerText = 'Votre nom est trop court';
        error.appendChild(p);
    }

    if (prenom.value === '') {
        let p = document.createElement('p');
        p.innerText = 'Veuillez renseigner votre prénom';
        error.appendChild(p);
    }
    if (prenom.value.length < 3) {
        let p = document.createElement('p');
        p.innerText = 'Votre nom est trop court';
        error.appendChild(p);
    }

    

    if (email.value === '') {
        let p = document.createElement('p');
        p.innerText = 'Veuillez renseigner votre email';
        error.appendChild(p);
    }

    if (!ckeckbox.checked) {
        let p = document.createElement('p');
        p.innerText = 'Veuillez accepter les conditions d\'utilisation';
        error.appendChild(p);
    }

    if (error.innerHTML === '') {
        let p = document.createElement('p');
        p.innerText = 'Votre formulaire a bien été envoyé';
        succes.appendChild(p);
        console.log('Votre formulaire a bien été envoyé');
    }

});