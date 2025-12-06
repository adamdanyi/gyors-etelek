const form = document.getElementById('fullForm'); 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const topicSelect = document.getElementById('topic');
const messageInput = document.getElementById('message');
const termsCheckbox = document.getElementById('terms');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorTel = document.getElementById('error-tel');
const errorTopic = document.getElementById('error-topic');
const errorM = document.getElementById('error-m'); 
const errorTerms = document.getElementById('error-term'); 

form.addEventListener('submit', function(event) {
    let isValid = true;


    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(el => el.classList.remove('input-error'));




    if (nameInput.value.trim() === "") {
        errorName.textContent = "A név megadása kötelező!";
        nameInput.classList.add('input-error');
        isValid = false;
    }



    if (emailInput.value.trim() === "") {
        errorEmail.textContent = "Az email cím megadása kötelező!";
        emailInput.classList.add('input-error');
        isValid = false;
    } 


    if (phoneInput.value.trim() === "") {
        errorTel.textContent = "A telefonszám megadása kötelező!";
        phoneInput.classList.add('input-error');
        isValid = false;
    } 


    if (topicSelect.value === "") {
        errorTopic.textContent = "Kérlek válassz egy témát a listából!";
        topicSelect.classList.add('input-error');
        isValid = false;
    }


    if (messageInput.value.trim().length < 10) {
        errorM.textContent = "Az üzenetnek legalább 10 karakternek kell lennie!";
        messageInput.classList.add('input-error');
        isValid = false;
    }


    if (!termsCheckbox.checked) {
        errorTerms.textContent = "A feltételek elfogadása kötelező!";
        termsCheckbox.classList.add('input-error');
        isValid = false;
    }

 
    if (!isValid) {
        event.preventDefault(); 
        console.log("Hiba az űrlapon!");
    } else {
 
        console.log("Minden adat rendben.");

    }
});