import axios from 'react-native-axios';

const ip = "1";

export function getAll() {
    return axios.get('http://' + ip + ':3000/api/drinks')
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function getSomething(i) {
    return axios.get('http://' + ip + ':3000/api/drinks/haku?name=' + i)
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function getAllIngredients() {
    return axios.get('http://' + ip + ':3000/api/ingredients')
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function getSomeIngredients(i) {
    return axios.get('http://' + ip + ':3000/api/ingredients/search?name=' + i)
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function addToList(drink) {
    return axios('http://' + ip + ':3000/api/drinks/', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({drink_name:drink.name, drink_instructions:drink.instructions, drink_ingredient:drink.ingredient, ingredientAmount: drink.ingredientAmount, ingredientUnit: drink.ingredientUnit})
    })
        .catch((e) => console.log("Error: " + e.message))
}

export function getCabinet(email) {
    return axios.get('http://' + ip + ':3000/api/cabinetverify/' + email)
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function addUser(email) {
    return axios('http://' + ip + ':3000/api/user',{
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({user_email: email})
    })
        .catch((e) => console.log("Error: " + e.message))
}

export function addToCabinet(email, ingredient) {
    return axios('http://' + ip + ':3000/api/cabinetverify/' + email,{
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({id: ingredient})
    })
        .catch((e) => {console.log("Error: " + e.message); alert("Ingredient " + ingredient.ingredient_name + " already in your bar cabinet")})
}

export function removeFromCabinet(email, id) {
    return axios('http://' + ip + ':3000/api/cabinetverify/del' + '?email=' + email + '&id=' + id,{
        method: 'DELETE',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

    })
        .catch((e) => console.log("Error: " + e.message))

}

export function drinkkify(email) {
    return axios.get('http://' + ip + ':3000/api/cabinetverify/search/drinkkify?email=' + email)
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function addIngredient(i, email) {
    return axios('http://' + ip + ':3000/api/ingredients?email=' + email,{
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({ingredient_name: i})
    })
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

