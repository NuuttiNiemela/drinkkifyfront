import axios from 'react-native-axios';

const ip = "10.100.24.34";

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



