import { Actions } from './constants';

export function signupRequest(data) {
  return {
    type: Actions.SIGNUP_REQUEST,
    payload: data,
  };
}

export function signinRequest(data) {
  return {
    type: Actions.SIGNIN_REQUEST,
    payload: data,
  };
}

export function updateJwtAndUsername(jwt, username) {
  return {
    type: Actions.UPDATE_DATA,
    payload: { jwt, username },
  };
}
