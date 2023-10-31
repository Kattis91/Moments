import axios from "axios";

axios.defaults.baseURL = 'https://my-django-rest-framework-196a9d11f298.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();