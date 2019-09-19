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

export function getUsersIngredients(u) {
    return axios.get('http://' + ip + ':3000/api/ingredients/user?email=' + u)
        .then((response) => response.data)
        .catch((e) => console.log("Error " + e.message))
}

export function editUsersIngredient(e, i) {
    return axios('http://' + ip + ':3000/api/ingredients/user?email=' + e, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({id: i.id, ingredient_name: i.ingredient_name})
    })
        .catch((e) => console.log("Error: " + e.message))
}

export function addToList(drink) {
    return axios('http://' + ip + ':3000/api/drinks/', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({
            value: drink.value,
            drink_name:drink.name,
            drink_instructions:drink.instructions,
            drink_ingredient:drink.ingredient,
            ingredientAmount: drink.ingredientAmount,
            ingredientUnit: drink.ingredientUnit,
        })
    })
        .catch((e) => console.log("Error: " + e.message))
}

export function addToList2(drink) {
    return axios('http://' + ip + ':3000/api/drinks/', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({
            value: drink.value,
            drink_name:drink.name,
            drink_instructions:drink.instructions,
            ingredientSearch0: drink.ingredientSearch,
            drink_ingredient0:drink.ingredient,
            ingredientAmount0: drink.ingredientAmount,
            ingredientUnit0: drink.ingredientUnit,
            ingredientSearch1: drink.ingredientSearch1,
            drink_ingredient1:drink.ingredient1,
            ingredientAmount1: drink.ingredientAmount1,
            ingredientUnit1: drink.ingredientUnit1,
            ingredientSearch2: drink.ingredientSearch2,
            drink_ingredient2:drink.ingredient2,
            ingredientAmount2: drink.ingredientAmount2,
            ingredientUnit2: drink.ingredientUnit2,
            ingredientSearch3: drink.ingredientSearch3,
            drink_ingredient3:drink.ingredient3,
            ingredientAmount3: drink.ingredientAmount3,
            ingredientUnit3: drink.ingredientUnit3,
            ingredientSearch4: drink.ingredientSearch4,
            drink_ingredient4:drink.ingredient4,
            ingredientAmount4: drink.ingredientAmount4,
            ingredientUnit4: drink.ingredientUnit4,
            ingredientSearch5: drink.ingredientSearch5,
            drink_ingredient5:drink.ingredient5,
            ingredientAmount5: drink.ingredientAmount5,
            ingredientUnit5: drink.ingredientUnit5,
            ingredientSearch6: drink.ingredientSearch6,
            drink_ingredient6:drink.ingredient6,
            ingredientAmount6: drink.ingredientAmount6,
            ingredientUnit6: drink.ingredientUnit6,
        })
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

export function editUser(oldEmail, email) {
    return axios('http://' + ip + ':3000/api/user?email=' + oldEmail, {
        method: 'PUT',
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

