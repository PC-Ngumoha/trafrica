
export const ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTION.LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case ACTION.LOGOUT: {
      return {
        ...state,
        user: null
      };
    }

    default:
      return state;
  }
};

export default userReducer;