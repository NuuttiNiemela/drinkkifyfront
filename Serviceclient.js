
export function getAll() {
    return fetch('http://10.100.104.47:3000/api/drinks')
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