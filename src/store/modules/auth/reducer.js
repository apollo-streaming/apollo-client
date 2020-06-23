import { Actions } from './constants';

const INITIAL_STATE = {
  jwt: localStorage.getItem('jwt'),
  username: localStorage.getItem('username'),
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Actions.UPDATE_DATA: {
      const { payload } = action;
      localStorage.setItem('jwt', payload.jwt);
      localStorage.setItem('username', payload.name);

      return { ...state, jwt: payload.jwt, username: payload.username };
    }
    default:
      return state;
  }
}
