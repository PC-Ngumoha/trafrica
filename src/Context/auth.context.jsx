import { createContext, useReducer, useEffect } from "react";
import userReducer, { ACTION as USER_ACTION } from "./user.reducer";

export const AuthContext = createContext(null);

const initialState = {
  user: null,
}

/**
 * Implements a simple context-based authentication system for the app.
 * This authentication system currently relies on local storage API.
 *
 * BUGS
 * - Does not yet work as it should. I'm finding it hard to explain further.
 *
 * @param {*} children - the components that will be enclosed in context.
 * @returns <AuthProvider />
 */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem('user'));

    // If session is yet to expire
    if (storedUser && new Date(storedUser.expiry) > new Date()) {
      dispatch({ type: USER_ACTION.LOGIN, payload: storedUser });
    } else {
      window.localStorage.removeItem('user');
    }
  }, []);

  const login = ({ email }) => {
    let storedUser = JSON.parse(window.localStorage.getItem('user'));
    if (storedUser && email === storedUser.email) {
      // set session to expire after every 40 minutes
      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 40);

      storedUser = {
        ...storedUser,
        expiry
      };

      dispatch({ type: USER_ACTION.LOGIN, payload: storedUser });
    }
  };

  const logout = () => {
    if (window.localStorage.getItem('user')) {
      window.localStorage.removeItem('user');
      dispatch({ type: USER_ACTION.LOGOUT });
    }
  };

  const isAuthenticated = () => {
    return state.user !== null;
  }

  return (
    <AuthContext.Provider value={{
      user: state.user, login, logout, isAuthenticated }}>
      { children }
    </AuthContext.Provider>
  )
};