import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then(res => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
    //서버측에서 받은 정보를 payload에 저장
  };
}
