var ip = "1";





export function getAll() {

    return fetch('http://' + ip + ':3000/api/drinks')
        .then((response) => response.json())
}

export function getSomething(i) {
    return fetch('http://' + ip + ':3000/api/drinks/haku?name=' + i)
        .then((response) => response.json())
}

export function getAllIngredients() {
    return fetch('http://' + ip + ':3000/api//ingredients')
        .then((response) => response.json())
}

    export function addToList(drink) {


        return fetch ('http://' + ip + ':3000/api/drinks', {

            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({drink_name:drink.name, drink_instructions:drink.instructions, drink_ingredient:drink.ingredients})
        })
            // .then((response) => response.text())
            // .then((responseData) => { console.log("response: " + responseData); })
            // .catch((err) => { console.log(err); });
    }

