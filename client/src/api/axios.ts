import axios from 'axios';

export async function loginUser(email: string, password: string) {
  console.log(email, password);
  try {
    const response = await axios.post('http://localhost:4000/login', {
      email,
      password,
    });
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
}

export async function getEncoderPage() {
  try {
    const response = await axios.get('/encode');
    return response;
  } catch (err) {
    return err;
  }
}
