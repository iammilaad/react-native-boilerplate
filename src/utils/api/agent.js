import {create} from 'apisauce';

export const api = create({
    baseURL: 'https://google.com.br',
    headers: {
        'Accept-Language': 'en',
        'Authorization': '',
    }
});
api.addResponseTransform(response => {
    switch(!!response && response.status) {
        case 401:
            break;
        case 403:
            break;
        case 500:
            break;
        case 200:
            break;
        case 404:
            break;
        case 400:
            break;
    }
})
