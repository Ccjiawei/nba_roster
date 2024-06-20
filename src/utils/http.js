/**
* ajax请求配置 
*/
import axios from "axios";
import apiURL from "./api.js";
// axios默认配置
axios.defaults.timeout = 60000; // 超时时间
axios.defaults.baseURL = apiURL; // 默认地址
// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
   
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    let res = response.data
    //判断返回code值
    switch (res.code) {
      case 200:
        return res;
      case 401:
        response.data = res;
        return response;
      default:
        response.data = res;
        return response;
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          return error.response;
      }
    }
    return Promise.reject(error.response.data)
  }
);
export default axios;
