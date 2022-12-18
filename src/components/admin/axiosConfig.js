import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44388/api'
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization =  localStorage.getItem("_adminAuthToken");
    //console.log( config.headers.Authorization);
    // console.log("intercepted");
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
export default instance;