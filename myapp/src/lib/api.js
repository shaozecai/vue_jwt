import fetchData from './http'

export const getTest = () => fetchData.request({ url: '/test' })
export const login = (name) => fetchData.request({
  url: '/login',
  method: 'POST',
  data: {
    username: name
  }
})
export const validate = () => fetchData.request({ url: '/validate' })