const INITIAL_STATE = {
  isAuthenticated: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNUP_SUCCESS':
      return { isAuthenticated: !!action.payload.email };
    default:
      return state;
  }
}
