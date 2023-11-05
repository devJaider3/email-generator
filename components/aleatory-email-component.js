export class AleatoryEmailComponent extends HTMLElement {

    constructor() {
        super();
    }

    _loadForm() {
        this.innerHTML = /*html*/`
    <form id="generate-aleatory-emails" class="text-center">
        <div class="input-group mb-3">
            <label for="domain_email" class="input-group-text">Dominio Correo</label>
            <input type="text" name="domain_email" id="domain_email" class="form-control" required value="example.com">
        </div>
        <div class="input-group mb-3">
            <label for="length_email" class="input-group-text">Longitud Usuario</label>
            <input type="number" name="length_email" id="length_email" class="form-control" min="4" max="40" required value="5">
        </div>
        <div class="input-group mb-3">
            <label for="quantity_email" class="input-group-text">Cantidad Correos</label>
            <input type="number" name="quantity_email" id="quantity_email" class="form-control" required placeholder="Cantidad Correos" title="Cantidad Correos" value="5">
        </div>
        <div class="mb-3">
            <h3>Settings</h3>
            <div id="settings">
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" role="switch" name="add_letters_upper" id="setting_letters_upper" checked>
                    <label class="form-check-label" for="setting_letters_upper">Mayusculas</label>
                </div>
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" role="switch" name="add_letters_lower" id="setting_letters_lower" checked>
                    <label class="form-check-label" for="setting_letters_lower">Minusculas</label>
                </div>
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input me-2" type="checkbox" role="switch" name="add_numbers" id="setting_numbers" checked>
                    <label class="form-check-label" for="setting_numbers">Numeros</label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <h3>Trucos</h3>
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input me-2" type="checkbox" role="switch" name="dot_trick" id="dot_trick">
                <label class="form-check-label" for="dot_trick">Agregar "."</label>
            </div>
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input me-2" type="checkbox" role="switch" name="plus_trick" id="plus_trick">
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

customElements.define("aleatory-email-component", AleatoryEmailComponent);