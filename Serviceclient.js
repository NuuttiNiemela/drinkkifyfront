
export function getAll() {
    return fetch('http://10.100.104.19:3000/api/drinks')
        .then((response) => response.json())
}

export function getOne(i) {
    return fetch('http://localhost:8080/api/drinks/' + i, {
        method: 'GET',
        headers: {
            Accept: 'applicaton/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .catch((error) => console.log(error.message))
}

    export function addToList(drink) {
        return fetch ('http://10.100.104.19:3000/api/drinks', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({drink_name:drink.name, drink_instructions:drink.instructions})
        })
            // .then((response) => response.text())
            // .then((responseData) => { console.log("response: " + responseData); })
            // .catch((err) => { console.log(err); });
    }



