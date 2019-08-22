var ip = '10.100.104.25';

export function getAll() {
    return fetch('http://' + ip + ':3000/api/drinks')
        .then((response) => response.json())
}

export function getSomething(i) {
    return fetch('http://' + ip + ':3000/api/drinks/' + i)
        .then((response) => response.json())
}

    export function addToList(drink) {
        return fetch ('http://IP:3000/api/drinks', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({drink_name:drink.name, drink_instructions:drink.instructions})
        })
            // .then((response) => response.text())
            // .then((responseData) => { console.log("response: " + responseData); })
            // .catch((err) => { console.log(err); });
    }



