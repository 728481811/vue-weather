import axios from 'axios'
export function getWeatherDate(location) {
    const url = '/weather';
    const data = {
        city: location
    };
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res)
    })
        
}