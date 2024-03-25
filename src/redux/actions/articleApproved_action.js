import axios from "axios";

export const LOAD_POSTS = "LOAD_POSTS";

// action types for approved articles
export const FETCH_ARTICLE_APPROVED_DATA_REQUEST =
   "FETCH_ARTICLE_APPROVED_DATA_REQUEST";
export const FETCH_ARTICLE_APPROVED_DATA_SUCCESS =
   "FETCH_ARTICLE_APPROVED_DATA_SUCCESS";
export const FETCH_ARTICLE_APPROVED_DATA_FAILURE =
   "FETCH_ARTICLE_APPROVED_DATA_FAILURE";

// action creators for approved articles
export const fetchArticleApprovedDataRequest = () => ({
   type: FETCH_ARTICLE_APPROVED_DATA_REQUEST,
});

export const fetchArticleApprovedDataSuccess = (data) => ({
   type: FETCH_ARTICLE_APPROVED_DATA_SUCCESS,
   payload: data,
});

export const fetchArticleApprovedDataFailure = (error) => ({
   type: FETCH_ARTICLE_APPROVED_DATA_FAILURE,
   payload: error,
});

export const fetchApprovedAriclesData = () => {
   return async (dispatch) => {
      dispatch(fetchArticleApprovedDataRequest());

      try {
         const response = await axios.get(
            import.meta.env.VITE_APP_BE_URL + "/posts/approved"
         );
         // if (!response.ok) {
         //    throw new Error("Getting approved article error");
         // }
         dispatch(fetchArticleApprovedDataSuccess(response.data));
      } catch (error) {
         dispatch(fetchArticleApprovedDataFailure(error.message));
      }
   };
};

export const getAllApprovedArticlesAction = (
   token,
   page = 0,
   size = 10,
   order = "id"
) => {
   return async (dispatch) => {
      try {
         const response = await fetch(
            import.meta.env.VITE_APP_BE_URL +
               "/posts/all" +
               "?page=" +
               page +
               "&size=" +
               size +
               "&order=" +
               order,
            {
               headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
               },
            }
         );

         if (!response.ok) {
            throw new Error("articles fetching issue!");
         }

         const data = await response.json();

         dispatch({
            type: LOAD_POSTS,
            payload: data,
         });
      } catch (error) {
         console.log(error);
      }
   };
};
