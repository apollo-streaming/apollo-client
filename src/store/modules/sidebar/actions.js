import { Actions } from './constants';

export const toggle = (to = null) => {
  return {
    type: Actions.TOGGLE,
    payload: { to },
  };
};

export const changeState = (state) => {
  return {
    type: Actions.CHANGE_STATE,
    payload: { state },
  };
};
