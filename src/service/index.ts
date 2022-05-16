import axios, { AxiosRequestConfig } from 'axios'
import { MyResponseType } from './types'

const instance = axios.create({
  baseURL: '/api'
})

const request = async <T>(config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
  try {
    const response = await instance(config)
    const data: MyResponseType<T> = response.data
    data.code === 0
      ? console.log(data.message) // 成功消息提示
      : console.error(data.message) // 失败消息提示
    return data
  } catch (err:any) {
    const message = err.message || '请求失败'
    console.error(message) // 网络错误消息提示
    return {
      code: -1,
      message,
      data: null as any
    }
  }
}

export default request