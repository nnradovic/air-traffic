import { URLALLFLIGHT } from '../shared/constants'

const fetchAll = (lat,lng) => {
    let url = URLALLFLIGHT + `?lat=${lat}&lng=${lng}&fDstL=0&fDstU=150`;

    let requestOpt = {
        method: "GET"
    }

    return fetch(url, requestOpt)
        .then(response => response.json())
}

export {
    fetchAll
}