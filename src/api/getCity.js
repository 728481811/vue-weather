import axios from 'axios'
export function getCity() {
    const url = '/getCity';
    return axios.get(url).then((res) => {
        const reg = /{.+}/;
        const data = JSON.parse(res.data.match(reg)[0]);
        return Promise.resolve(data)
    })
}
