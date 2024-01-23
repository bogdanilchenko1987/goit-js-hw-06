const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;


    if (!(email.value) || !(password.value)) {
        alert('Поле не заповнене')
    }
    else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data)
        formEl.reset();
    }


   
}

