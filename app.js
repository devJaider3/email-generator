import { generateAleatoryEmails, generateCustomEmails, generateHumanEmails } from "./modules/generateEmail.js";

const d = document;
const $ = (e) => d.querySelector(e);
const $a = (e) => d.querySelectorAll(e);

export const app = (e) => {
    let path = window.location.pathname.split(".")[0];
    if (path === "/email-generator/index" || path === "/email-generator/") {
        document.title = "Generador Correos";

        if ($("#aleatory_email").checked) {
            $("#form-container").insertAdjacentHTML("beforeend", "<aleatory-email-component></aleatory-email-component>");
        }

        d.addEventListener("submit", async (e) => {
            // ALEATORY EMAILS
            if (e.target.matches("#generate-aleatory-emails")) {
                e.preventDefault();
                $("#email-response").innerHTML = "";
                let data = Object.fromEntries(new FormData(e.target));
                if (!data.length_email && !isNaN(data.length_email)) {
                    alert("Longitud del email es requerido");
                } else if (!data.quantity_email && !isNaN(data.length_email)) {
                    alert("Cantidad es requerida");
                } else {
                    if (!(Number(data.length_email) > 3 && Number(data.length_email) <= 40)) {
                        alert("Longitud no valida");
                    } else if (!(Number(data.quantity_email) <= 100)) {
                        alert("Cantidad no valida");
                    } else if (!(/^[a-z0-9.-]+\.[a-z]{2,6}$/.test(data.domain_email))) {
                        alert("Dominio invalido, no agregues @");
                    } else {
                        let correos = generateAleatoryEmails(data);
                        correos.forEach((e) => {
                            $("#email-response").insertAdjacentHTML("beforeend", `<li class="list-group-item">${e}</li>`);
                        })
                    }
                }
            }

            // HUMAN EMAILS
            if (e.target.matches("#generate-human-emails")) {
                e.preventDefault();
                $("#email-response").innerHTML = "";
                let data = Object.fromEntries(new FormData(e.target));
                if (!data.quantity_email && !isNaN(data.length_email)) {
                    alert("Cantidad es requerida");
                } else {
                    if (!(Number(data.quantity_email) <= 100)) {
                        alert("Cantidad no valida");
                    } else {
                        let correos = await generateHumanEmails(data);
                        correos.forEach((e) => {
                            $("#email-response").insertAdjacentHTML("beforeend", `<li class="list-group-item">${e}</li>`);
                        })
                    }
                }
            }

            // CUSTOM EMAILS
            if (e.target.matches("#generate-custom-emails")) {
                e.preventDefault();
                $("#email-response").innerHTML = "";
                let data = Object.fromEntries(new FormData(e.target));
                if (!data.quantity_email && !isNaN(data.length_email)) {
                    alert("Cantidad es requerida");
                } else {
                    if (!(/^[a-zA-Z0-9.]+$/.test(data.user_email))) {
                        alert("Usuario email no es valido");
                    } else if (!(/^[a-z0-9.-]+\.[a-z]{2,6}$/.test(data.domain_email))) {
                        alert("Dominio invalido, no agregues @");
                    } else if (!(Number(data.quantity_email) <= 100)) {
                        alert("Cantidad no valida");
                    } else {
                        let correos = generateCustomEmails(data);
                        correos.forEach((e) => {
                            $("#email-response").insertAdjacentHTML("beforeend", `<li class="list-group-item">${e}</li>`);
                        })
                    }
                }
            }

        })

        d.addEventListener("input", (e) => {
            if (e.target.matches("[name='type_email']")) {
                $("#form-container").innerHTML = "";
                $("#email-response").innerHTML = "";

                if (e.target.matches("#aleatory_email")) {
                    $("#form-container").insertAdjacentHTML("beforeend", "<aleatory-email-component></aleatory-email-component>")
                }
                if (e.target.matches("#human_email")) {
                    $("#form-container").insertAdjacentHTML("beforeend", "<human-email-component></human-email-component>")
                }
                if (e.target.matches("#custom_email")) {
                    $("#form-container").insertAdjacentHTML("beforeend", "<custom-email-component></custom-email-component>")
                }

            }
        })

        d.addEventListener("click", (e) => {
            if (e.target.matches("#settings input[type='checkbox']")) {
                let checkSelected = [...$a("#settings input[type='checkbox']")].filter((checkbox) => checkbox.checked);
                if (checkSelected.length === 0) {
                    e.target.checked = true;
                }
            }

            if (e.target.matches("#copy-emails, #copy-emails *")) {
                const elementosLi = $a('li');
                let contenidoCopiado = '';

                for (let i = 0; i < elementosLi.length; i++) {
                    contenidoCopiado += elementosLi[i].textContent + '\n';
                }

                const temp = document.createElement('textarea');
                temp.value = contenidoCopiado;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand('copy');
                document.body.removeChild(temp);
            }
        })
    }

}

