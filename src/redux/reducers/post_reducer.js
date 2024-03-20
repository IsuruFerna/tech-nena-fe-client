import { LOAD_POSTS } from "../actions/post_action";

export const POST = "POST";
export const CREATE_POST = "CREATE_POST";

const initialState = {
   content: [],
   pageNumber: "",
   offset: "",
   last: false,
   first: true,
   totalPages: 0,
   number: 0,
};

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case POST:
         return {
            ...state,
            post: action.payload,
         };

      case LOAD_POSTS:
         return {
            ...state,
            content: action.payload.content,
            pageNumber: action.payload.pageable.pageNumber,
            offset: action.payload.pageable.offset,
            last: action.payload.last,
            first: action.payload.first,
            totalPages: action.payload.totalPages,
            number: action.payload.number,
         };

      default:
         return state;
   }
};

export default postReducer;
