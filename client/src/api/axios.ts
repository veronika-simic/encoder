import axios from 'axios';

export async function loginUser(email: string, password: string) {
  console.log(email, password);
  try {
    const response = await axios.post('http://localhost:4000/login', {
      email,
      password,
    });
    return response;
  } catch (err) {
    return err;
  }
}

export async function encodeUserInput(userInput: string) {
  try {
    const response = await axios.post('http://localhost:4000/encode', {
      userInput,
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
