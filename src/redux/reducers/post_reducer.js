export const POST = "POST";

const initialState = {
   name: "",
};

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case POST:
         return {
            ...state,
            post: action.payload,
         };

      default:
         return state;
   }
};

export default postReducer;
