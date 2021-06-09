import axios from 'axios';

const kvRequest = axios.create({
    baseURL: '/~kv',
    timeout: 10000,
});

const apiRqeuest = axios.create({
    baseURL: '/~myapi',
    timeout: 10000,
})


export async function getApi(path:string) {
    const result = await apiRqeuest.get(path);
    return result;
}


export async function getStaticContent(path:string) {
    const result = await kvRequest.get(path);
    return result;
}