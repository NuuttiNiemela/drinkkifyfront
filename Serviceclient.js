var ip = '10.100.104.25';

export function getAll() {
    return fetch('http://' + ip + ':3000/api/drinks')
        .then((response) => response.json())
}

export function getSomething(i) {
    return fetch('http://' + ip + ':3000/api/drinks/' + i)
        .then((response) => response.json())
}
