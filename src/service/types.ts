/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-16 17:47:25
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 17:49:57
 * @FilePath: \webpack-react\src\service\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface MyResponseType<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface User {
  name: string;
}