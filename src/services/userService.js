import API from './api';

export const loginUser = async (data) => {
  try {
    const response = await API.post('/api/v1/auth/login', data);
    return response.data;
  } catch (e) {
    throw e;
  }
};
export const getTest = async () => {
  try {
    console.log("after call Pressed serve");
    const response = await API.get('todos/1');
    return response.data;
  } catch (e) {
    throw e;
  }
};
