import { USER_DETAILS } from "../actions/user_action";

const initialState = {
   email: "",
   id: "",
   lastname: "",
   name: "",
   role: "",
   username: "",
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case USER_DETAILS:
         return {
            ...state,
            email: action.payload.email,
            id: action.payload.id,
            lastname: action.payload.lastname,
            name: action.payload.name,
            role: action.payload.role,
            username: action.payload.username,
         };

      default:
         return state;
   }
};

export default userReducer;
