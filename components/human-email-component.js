export class HumanEmailComponent extends HTMLElement {

    constructor() {
        super();
    }

    _loadForm() {
        this.innerHTML = /*html*/`
    <form id="generate-human-emails" class="text-center">
        <div class="input-group mb-3">
            <label for="domain_email" class="input-group-text">Dominio Correo</label>
            <input type="text" name="domain_email" id="domain_email" class="form-control" required placeholder="example.com">
        </div>
        <div class="input-group mb-3">
            <label for="quantity_email" class="input-group-text">Cantidad Correos</label>
            <input type="number" name="quantity_email" id="quantity_email" class="form-control" required value="5">
        </div>
        <div class="mb-3">
            <h2>Settings</h2>
            <div id="settings">
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" name="add_letters_upper" id="setting_letters_upper" checked>
                    <label class="form-check-label" for="setting_letters_upper">Mayusculas</label>
                </div>
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" name="add_letters_lower" id="setting_letters_lower" checked>
                    <label class="form-check-label" for="setting_letters_lower">Minusculas</label>
                </div>
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" name="add_numbers" id="setting_numbers" checked>
                    <label class="form-check-label" for="setting_numbers">Numeros</label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <h2>Trucos</h2>
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input me-2" type="checkbox" name="dot_trick" id="dot_trick">
                <label class="form-check-label" for="dot_trick">Agregar "."</label>
            </div>
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input me-2" type="checkbox" name="plus_trick" id="plus_trick">
                <label class="form-check-label" for="plus_trick">Agregar "+"</label>
            </div>
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Generar</button>
        </div>
    </form>
        `
    }

    connectedCallback() {
        this._loadForm();
    }
}

customElements.define("human-email-component", HumanEmailComponent);