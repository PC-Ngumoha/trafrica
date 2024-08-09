
// Defines the actions that can be performed by user.
export const ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

/**
 * Implements a basic reducer function to track actions performed by
 * the user and corresponding state changes which accompany these actions.
 *
 * @param {*} state - current state data
 * @param {*} action - action transmitted
 * @returns userReducer
 */
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