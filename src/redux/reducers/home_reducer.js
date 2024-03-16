export const HOME = "HOME";

const initialState = {
   name: "",
};

const homeReducer = (state = initialState, action) => {
   switch (action.type) {
      case HOME:
         return {
            ...state,
            neme: action.payload,
         };

      default:
         return state;
   }
};

export default homeReducer;
