import axios from "axios";
import { TOKEN, useLocalStorage } from "../../hooks/useLocalStorage";

// action types for dashboard articles
export const FETCH_DASHBOARD_ARTICLE_DATA_REQURST =
   "FETCH_DASHBOARD_ARTICLE_DATA_REQURST";
export const FETCH_DASHBOARD_ARTICLE_DATA_SUCCESS =
   "FETCH_DASHBOARD_ARTICLE_DATA_SUCCESS";
export const FETCH_DASHBOARD_ARTICLE_DATA_FAILURE =
   "FETCH_DASHBOARD_ARTICLE_DATA_FAILURE";

// action creator for dashboard articles
export const fetchDashboardArticlesDataRequest = () => ({
   type: FETCH_DASHBOARD_ARTICLE_DATA_REQURST,
});

export const fetchDashboardArticleDataSuccess = (data) => ({
   type: FETCH_DASHBOARD_ARTICLE_DATA_SUCCESS,
   payload: data,
});

export const fetchDashboardArticleDataFailure = (error) => ({
   type: FETCH_DASHBOARD_ARTICLE_DATA_FAILURE,
   payload: error,
});

export const fetchDashboardArticleData = (
   page = 0,
   size = 10,
   order = "id",
   state = "all"
) => {
   return async (dispatch) => {
      dispatch(fetchDashboardArticlesDataRequest());

      try {
         const { getItem } = useLocalStorage(TOKEN);

         const response = await axios.get(
            import.meta.env.VITE_APP_BE_URL +
               "/posts/all" +
               "?page=" +
               page +
               "&size=" +
               size +
               "&order=" +
               order +
               "&state=" +
               state,
            {
               headers: {
                  Authorization: "Bearer " + getItem(),
                  "Content-Type": "application/json",
               },
            }
         );

         const data = await response.data;
         console.log("this is dispatch data: ", data);
         dispatch(fetchDashboardArticleDataSuccess(data));
      } catch (error) {
         dispatch(fetchDashboardArticleDataFailure(error.message));
      }
   };
};
