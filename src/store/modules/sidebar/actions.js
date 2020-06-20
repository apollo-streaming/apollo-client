import { Actions } from './constants';

export const toggle = () => {
  return {
    type: Actions.TOGGLE,
  };
};

export const changeState = (state) => {
  return {
    type: Actions.CHANGE_STATE,
    payload: { state },
  };
};
