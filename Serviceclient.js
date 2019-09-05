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

// EI TOIMI VIELÄ
export function getSomeIngredients(i) {
    return axios.get('http://' + ip + ':3000/api/drinks/haku?name=' + i)
        .then((response) => response.data)
        .catch((e) => console.log("Error: " + e.message))
}

export function getCabinet(uid) {
    return axios.get('http://' + ip + ':3000/api//cabinet')
        .then((response) => response.data)
}

    export function addToList(drink) {
        return axios('http://' + ip + ':3000/api/drinks/', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            data: JSON.stringify({drink_name:drink.name, drink_instructions:drink.instructions, drink_ingredient:drink.ingredients})
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
        .catch((e) => console.log("Error: " + e.message))
}

export function removeFromCabinet(email, id) {
    return axios('http://' + ip + ':3000/api/cabinetverify/del' + '?email=' + email + '&id=' + id,{
        method: 'DELETE',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

    })
        .catch((e) => console.log("Error: " + e.message))
}

