import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${localStorage.getItem('token')}`,
  },
});
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      /* set to global state in the future */
      return 'You have to login';
    }
    return err.response;
  }
);
export async function loginUser(email: string, password: string) {
  const response = await axiosInstance.post('/login', {
    email,
    password,
  });
  localStorage.setItem('token', response.data.token);
  return response;
}

export async function encodeUserInput(userInput: string) {
  const response = await axiosInstance.post('/encode', {
    userInput,
  });
  return response;
}
