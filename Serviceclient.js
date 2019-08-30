import axios from 'react-native-axios';

const ip = "1";

export function getAll() {

    return axios.get('http://' + ip + ':3000/api/drinks')
        .then((response) => response.data)
}

export function getSomething(i) {
    return axios.get('http://' + ip + ':3000/api/drinks/haku?name=' + i)
        .then((response) => response.data)
}

export function getAllIngredients() {
    return axios.get('http://' + ip + ':3000/api/ingredients')
        .then((response) => response.data)
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
            // .then((response) => response.text())
            // .then((responseData) => { console.log("response: " + responseData); })
            // .catch((err) => { console.log(err); });
    }

export function getCabinet() {
    return axios.get('http://' + ip + ':3000/api/cabinetverify')
        .then((response) => response.data)
}

export function addUser(email) {
    return axios('http://' + ip + ':3000/api/user',{
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: JSON.stringify({user_email: email})
    })
}



