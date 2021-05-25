import { USER_LOGIN_ERROR } from "../actions/types";

const initialState = {
  users: [],
  error: null,
};

// const Loginreducer = (state = initialState, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     case USER_LOGIN_SUCCESS:
//       return { ...state, users: [] };
//     case USER_LOGIN_ERROR:
//         return { ...state, errors: action.payload };
//   }
// };

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_ERROR:
      return null;
  }
};

export default LoginReducer;
