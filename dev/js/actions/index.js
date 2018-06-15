import axios from 'axios';
export const catSearchServiceInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 30000,
});
catSearchServiceInstance.interceptors.request.use(
  (config) => {
    const copyConfig = Object.assign({}, config);
    const stringifiedData = (config.data instanceof FormData) ? '' : (JSON.stringify(config.data) || '');
    copyConfig.headers = {};
    copyConfig.body = stringifiedData;
    // delete copyConfig.data;
    return copyConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
export const get_question = () => ({
  type: "GET_QUESTION",
  payload: catSearchServiceInstance.get('questions.json'),
});

