let serilize = target =>
    Array.from(target.elements).reduce((acc, el) => {
        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    }, {});
class User {
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValue = {
        name: '',
        email: ''
    };
    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
    }
    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) {
                throw new response;
            }
            this.#users = await response.json();
            return this.#users;
        } catch (e) {
            console.error('Error users:', e);
        }

    }
    static renderUser(user) {
        let li = document.createElement('li');
        li.innerText = user.name;
        return li;
    }
    static render() {
        this.#ul;
        let users = this.#users;
        users.forEach(user => this.#ul.appendChild(this.renderUser(user)));
        return this.#ul;
    }
    static onSubmit(e) {
        e.preventDefault();
        let data = serilize(e.target);
        let user = new User(data);
        const errors = user.validate();
        if (Object.keys(errors).length > 0) {
            console.log(this)
            this.#form.innerHTML = this.formHtml({
                data: data,
                errors: errors
            });
            return;
        }
        user.save();
    }
    save() {
        return User.save(this);

    }
    static async save(user) {
        try {
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            this.#users.unshift(data);  
            this.#ul.prepend(this.renderUser(data));
            this.#form.innerHTML = this.formHtml({
                data: this.#initialValue,
                errors: {}
            });
            console.log('User saved successfully:', data);
        } catch (e) {
            console.error('Error saving user:', e);
        }
    }
    validate() {
        let errors = {};
        if (!this.name) {
            errors.name = "nombre es obligatorio";
        }
        if (!this.email) {
            errors.email = "email es obligatorio";
        }
        return errors;
    }

    static formHtml({ data, errors }) {
        return `
        <form>
        <div>
            <h2>Crear usuario</h2>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name"  value="${data.name}">
            ${errors.name || ''}
            <label for="email">email</label>
            <input type="text" id="email" name="email"  value="${data.email}">
            ${errors.email || ''}
            <button type="submit" value="Enviar">Crear</button>
        </div>
        </form>
        `;
    }
    static renderForm() {
        this.#form.onsubmit = this.onSubmit.bind(this);
        this.#form.innerHTML = this.formHtml({
            data: this.#initialValue,
            errors: {}
        });
        return this.#form;
    }
}

async function main() {
    const users = await User.getAll();
    const template = User.render(); // ul 
    const form = User.renderForm(); // form

    document.body.insertAdjacentElement('afterbegin', template);
    document.body.insertAdjacentElement('afterbegin', form);
}
main();