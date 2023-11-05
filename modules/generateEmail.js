// Letra aleatoria del alfabeto
function letterAleatory(opc) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'; // Letras minúsculas del alfabeto
    const indice = Math.floor(Math.random() * alfabeto.length);
    return opc === 0 ? alfabeto.charAt(indice) : alfabeto.charAt(indice).toUpperCase();
}

// Numero aleatorio en un rango.
function numberRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Insercion de puntos aleatorios.
function insertRandomDots(inputArray) {
    // Calcula la cantidad de puntos que se pueden insertar (entre 1 y la longitud - 2)
    const maxDots = Math.min(Math.floor(Math.random() * (inputArray.length - 1)) + 1, Math.floor(inputArray.length * 0.9));
    // Inserta los puntos de manera aleatoria
    for (let i = 0; i < maxDots; i++) {
        const index = numberRandomBetween(1, inputArray.length - 2); // Evita el principio y el final
        if ((inputArray[index] === '.' || inputArray[index + 1] === '.' || inputArray[index - 1] === '.')) continue; // Evitar puntos seguidos
        inputArray.splice(index, 0, '.');
    }
    return inputArray;
}

// Insercion de plus trick.
function insertPlusTrick(inputArray, settings) {
    inputArray.push("+");
    let extend = getAleatoryEmail(numberRandomBetween(1, 8), settings);
    return [...inputArray, ...extend];
}

// Usuario aleatorio segun las setting
function getAleatoryEmail(length, settings) {
    // retorna un correo aleatorio en forma de array
    return [...Array.from({ length: Number(length) })].map((e) => {
        const settingAleatory = Math.floor(Math.random() * settings.length);
        if (settings[settingAleatory] === "upper") {
            return letterAleatory(1);
        }
        if (settings[settingAleatory] === "lower") {
            return letterAleatory(0);
        }
        if (settings[settingAleatory] === "number") {
            return numberRandomBetween(0, 9);
        }
    })
}

// Nombres Aleatorios
async function getAleatoryNames() {
    let maxNames = numberRandomBetween(1, 2);
    let userMail = [];
    for (let i = 0; i < maxNames; i++) {
        let index = numberRandomBetween(0, 592);
        let name = await (await fetch("data/names.json")).json();
        userMail.push(name[index]['human'].toLowerCase());
    }
    return userMail.join('.').split("");
}

// Generador Emails Aleatorios
export const generateAleatoryEmails = (data) => {
    let settings = [];
    if (data.add_letters_upper === "on") settings.push("upper");
    if (data.add_letters_lower === "on") settings.push("lower");
    if (data.add_numbers === "on") settings.push("number");

    let correos = [...Array.from({ length: Number(data.quantity_email) })].map((e) => {
        let correo = getAleatoryEmail(data.length_email, settings);
        if (data.dot_trick === "on") {
            correo = insertRandomDots(correo);
        }
        if (data.plus_trick === "on") {
            correo = insertPlusTrick(correo, settings);
        }
        return correo.join("");
    })
    return correos.map((e) => `${e}@${data.domain_email}`);
}

// Generador Emails Humanos Aleatorios
export const generateHumanEmails = async (data) => {
    let settings = [];
    if (data.add_letters_upper === "on") settings.push("upper");
    if (data.add_letters_lower === "on") settings.push("lower");
    if (data.add_numbers === "on") settings.push("number");

    let correos = await Promise.all([...Array.from({ length: Number(data.quantity_email) })].map(async (e) => {
        let correo = await getAleatoryNames();

        if (data.dot_trick === "on") {
            correo = insertRandomDots(correo);
        }
        if (data.plus_trick === "on") {
            correo = insertPlusTrick(correo, settings);
        }
        return correo.join("");
    }))
    return correos.map((e) => `${e}@${data.domain_email}`);
}

// Generador Emails Custom Aleatorios
export const generateCustomEmails = (data) => {
    let settings = [];
    if (data.add_letters_upper === "on") settings.push("upper");
    if (data.add_letters_lower === "on") settings.push("lower");
    if (data.add_numbers === "on") settings.push("number");

    let correos = [...Array.from({ length: Number(data.quantity_email) })].map((e) => {
        let correo = data.user_email.split("");
        if (data.dot_trick === "on") {
            correo = insertRandomDots(correo);
        }
        if (data.plus_trick === "on") {
            correo = insertPlusTrick(correo, settings);
        }
        return correo.join("");
    })
    return correos.map((e) => `${e}@${data.domain_email}`);
}