import axios from 'axios'
// 每个请求的拦截器方法可能不一样

class FetchData {
    constructor () {
        this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/' // 请求路径
        this.timeout = 3000 // 设置超时时间
    }
    setInterceptor(instance) { //设置拦截器
        // 请求拦截 添加token
        instance.interceptors.request.use(config => {
            config.headers.Authorization = `${localStorage.getItem('token')}`;
            return config
        }, (err) => {
            Promise.reject(err);
        })
        // 响应拦截
        instance.interceptors.response.use(res => res.data, (err) => {
            Promise.reject(err)
        })
    }

    request(request) {
        const instance = axios.create();
        const config = {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...request
        }
        this.setInterceptor(instance);
        return instance(config)
    }

}

export default new FetchData()
