import axios from 'axios'

export function getUserInfo(id) {
    return axios.get(`http://localhost:3000/userinfo?id=${id}`)
}

export function search (keyword) {
    return axios.get(`http://localhost:3000/search?keywords=${keyword}`)
}

export function getArticleInfo (id) {
    return axios.get(`http://localhost:3000/article?id=${id}`)
}

export default {
    getUserInfo, search, getArticleInfo
}
