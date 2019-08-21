

export function getAll() {
    return fetch('http://localhost:8080/api/recipe', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((error) => console.log(error.message))
}

export function getOne(i) {
    return fetch('http://localhost:8080/api/recipe/' + i, {
        method: 'GET',
        headers: {
            Accept: 'applicaton/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .catch((error) => console.log(error.message))
}