import axios from "axios";

const http = "https://free.currconv.com/api/v7/"

const API_KEY = "d29ad2d4053abdd874e0"

export const getCurrency_API = (currency) => {
    return axios.get(`${http}currencies?apiKey=${API_KEY}`).then(res => {
        return res.data.results
    })

}
export const convertMoney = (whith, to) => {

    const moneu = `${whith}_${to}`;

    return axios.get(`${http}convert?q=${moneu}&compact=ultra&apiKey=${API_KEY}`).then(res => {
        return res.data[moneu].toFixed(2)
    })
}