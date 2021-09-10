import validate from 'validate';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init () {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validator(e);
        })
    }

    validator(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validate.isEmail(emailInput.value)) {
            alert('E-mail inválido!');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value > 50) {
            alert('A senha precisa ter entre 3 e 50 caracteres!');
            error = true;
        }

        if(!error) el.submit();
    }
} 