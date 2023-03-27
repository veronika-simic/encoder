import axios from 'axios';

export async function getLoginPage() {
  try {
    const response = await axios.get('/login');
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
