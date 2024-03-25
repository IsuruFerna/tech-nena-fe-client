import {
   FETCH_DASHBOARD_ARTICLE_DATA_FAILURE,
   FETCH_DASHBOARD_ARTICLE_DATA_REQURST,
   FETCH_DASHBOARD_ARTICLE_DATA_SUCCESS,
} from "../actions/dashboard_action";

const initialState = {
   articles: [],
   pageNumber: "",
   offset: "",
   last: false,
   first: true,
   totalPages: 0,
   number: 0,
   isLoading: false,
   error: null,
};

const dashboardReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DASHBOARD_ARTICLE_DATA_REQURST:
         return {
            ...state,
            isLoading: true,
            error: null,
         };

      case FETCH_DASHBOARD_ARTICLE_DATA_SUCCESS:
         return {
            ...state,
            articles: action.payload.content,
            pageNumber: action.payload.pageable.pageNumber,
            offset: action.payload.pageable.offset,
            last: action.payload.last,
            first: action.payload.first,
            totalPages: action.payload.totalPages,
            number: action.payload.number,
            isLoading: false,
         };

      case FETCH_DASHBOARD_ARTICLE_DATA_FAILURE:
         return {
            ...state,
            error: action.payload,
            isLoading: false,
         };

      default:
         return state;
   }
};

export default dashboardReducer;
