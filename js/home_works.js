const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


button.addEventListener('click', ()=>{
    const value = input.value.trim();
    if (gmailRegExp.test(value)){
        result.textContent = 'Почта верна';
        result.style.color = 'green';
    }else{
         result.textContent = 'Почта не верна';
         result.style.color = 'red';
    }
});

const iinInput = document.querySelector('#iin_input');
const iinButton = document.querySelector('#iin_button');
const iinResult = document.querySelector('#iin_result');

const iinRegExp = /^\d{12}$/;

iinButton.addEventListener('click', () => {
    if (iinRegExp.test(iinInput.value.trim())) {
        iinResult.innerHTML = 'ИИН верный';
        iinResult.style.color = 'green';
    } else {
        iinResult.innerHTML = 'ИИН неверный';
        iinResult.style.color = 'red';
    }
});