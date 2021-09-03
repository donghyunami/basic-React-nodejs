import { LOGIN_USER, REGISTER_USER } from '../_actions/types';

export default function loginUser(preState = {}, action) {
  switch (action.type) {
    case LOGIN_USER: //action.type === LOGIN_USER
      return {
        ...preState,
        loginSuccess: action.payload,
        //LOGIN_USER type의 payload 값을 저장
      };
    case REGISTER_USER: //action.type === REGISTER_USER
      return {
        ...preState,
        register: action.payload,
      };
    default:
      return preState;
  }
}
