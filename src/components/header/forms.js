import * as ls from "./localStage.js";

document.addEventListener("DOMContentLoaded", function (e) {
    setTimeout(() => {
        forms()
    }, 2000);
} );

const error = {
    "void": "Debes llenar este campo.",
    "number": "Este campo solo permite letras.",
    "shortLength": "El mínimo de caracteres permitido es 3.",
    "email": "Ingrese un correo eletrónico válido.",
    "password": "Las contraseñas no son iguales."
};
const btnFormRegister = document.querySelector('#forms-register-btn'),
    inputsRegister = document.querySelectorAll('.forms-register input[required]'),
    btnFormRegisterReset = document.querySelector('#forms-register-reset');

function forms() {
    btnFormRegister.addEventListener('click', (e) => {
        e.preventDefault();
        deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
        for (const input of inputsRegister) {
            validData(input)
        }
        submitForm();
    });
    
    btnFormRegisterReset.addEventListener('click', (e) => {
        e.preventDefault();
        deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
    });

    // Add evenet listener to inputs
    for (const input of inputsRegister) {
        input.addEventListener('keyup', (e) => {
            deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
            validData(e.srcElement)
        });
    }
}

function submitForm() {
    let erros = document.querySelectorAll('.forms-register .invalid-feedback').length;
    if (erros === 0) {
        //set values in the LocalStorage
        for (const input of inputsRegister) {
            ls.setStorage(input.attributes['name'].value, input.value);
        }
        //Refresh page
        location.reload();
    }
}

function validData(field) {
    //Valid if is empty
    if (field.value === '') {
        showFeedbacks(field, error['void'])
    } else {
        let type = field.attributes[0].value,
            vl = field.value;
        //Select of type
        switch (type) {
            case "text":
                //Valid if value have number
                if (isNumber(vl)) {
                    deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
                } else {
                    showFeedbacks(field, error['number']);
                }
                //Valid if value is menor to 3
                if (vl.length < 3) {
                    showFeedbacks(field, error['shortLength']);
                }
                break;
            case "email":
                if (isEmail(vl)) {
                    deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
                } else {
                    showFeedbacks(field, error['email']);
                }
                break;
            case "password":
                let passwords = Array.prototype.slice.call(document.querySelectorAll('.forms-register input[type="password"]'));
                if (passwords[0].value !== '' || passwords[1].value !== '') {
                    if (passwords[0].value === passwords[1].value) {
                        deleteFeedbacks(document.querySelectorAll('.forms-register .invalid-feedback'));
                    } else {
                        showFeedbacks(field, error['password']);
                    }
                }
                break;
            default:
                console.error('Tipo de dato no encontrado');
                break;
        }
    }
}

function showFeedbacks(field, msg) {
    //Set border color red in field
    field.style.borderColor = 'red';
    //Create feedback
    field.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${msg}</div>`);
    //Show feedback
    field.nextElementSibling.style.display = 'block';
}

//Delete feedbacks
function deleteFeedbacks(elements) {
    for (let ele of elements ) {
        //Restore border color
        ele.previousElementSibling.style.borderColor = 'black';
        //Delete element
        ele.remove()
    }
}

const isNumber = n => {
    const regex = new RegExp("^[a-zA-Z ]+$");
    return regex.test(n)
}

const isEmail = n => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(n)
}