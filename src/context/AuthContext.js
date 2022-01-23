import { createContext } from "react";
import AuthReducer from "./AuthReducer";
import { useReducer } from "react";

const INITIAL_STATE = {
  user: {
    _id: "61eb5544946f0062d966a329",
    username: "Azula",
    email: "azula@dog.com",
    profilePicture: "People/10.jpg",
    coverPicture: "",
    followers: [],
    following: [],
    isAdmin: false,
    desc: "Just a loving Shepherd who loves to bully sticks, biting, and rubs!",
    city: "Brampton",
    from: "Sheptown",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
