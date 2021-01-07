const email = document.getElementById('email');
const submit = document.getElementById('submit');
const error = document.getElementById('error');
const form = document.getElementById('form');

form.setAttribute('noValidate', "true");
error.style.display = 'none';

const validate = (email) => { 
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validateEmail = (e)=> {
  e.preventDefault();
  let emailValue = email.value.trim();
  email.classList.remove('js-error');
  if(validate(emailValue)) {
    error.style.display = 'none';
    email.value = '';
  }else {
    email.classList.add('js-error');
    error.style.display = 'block';
  }
  return false;
}

form.addEventListener('submit', validateEmail);
