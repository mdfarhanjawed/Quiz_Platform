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

export const get_reasoning_question = () => ({
  type: "GET_REASONING_QUESTION",
  payload: catSearchServiceInstance.get('questions.json', { params: { question_type: "REASONING" } }),
})

export const get_english_question = () => ({
  type: "GET_ENGLISH_QUESTION",
  payload: catSearchServiceInstance.get('questions.json', { params: { question_type: "ENGLISH" } }),
})

export const update_response = (id, response) => ({
  type: "UPDATE_RESPONSE",
  id,
  response,
})