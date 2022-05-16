/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-16 14:54:13
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 17:53:32
 * @FilePath: \webpack-react\src\service\api\test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../service/index'
import { User } from '@/service/types'

export const successApi = <T>(params:T) => {
  return request<User>({
    url: '/success',
    method: 'get',
    params
  })
}

export const failApi = <T>(params:T) => {
  return request<User>({
    url: '/fail',
    method: 'get',
    params
  })
}