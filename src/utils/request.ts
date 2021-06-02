import originAxios from 'axios';
import { message } from 'antd';

const axios = originAxios.create({
  timeout: 20000
});

axios.interceptors.response.use(
  function(response) {
    if (response.data && response.data.flag === 1) {
      //       successful: {flag: 0, data: ''}
      //       unsuccessful: {flag: 1, msg: 'server error'}
      let errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function(error) {
    return Promise.reject(error)
  }
)

export function get(url: string, data: any) {
  return axios.get(url, {
    params: data
  })
}

// 没有用 axios.post 因为 默认会将数据 序列化成 JSON 数据来发送，下面这样写 发送到后端就是form表单格式了，后端就不用解析了
export function post(url: string, data: any) {
  return axios({
    method: 'post',
    url,
    data
  })
};
