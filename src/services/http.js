export function get(url) {
    return fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => data);
}

export function put() {}

export function post(
    url,
    body,
    headers = {
        'Content-Type': 'application/json',
    },
) {
    return fetch(url, { method: 'POST', body, headers })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
}

export function clean() {}
