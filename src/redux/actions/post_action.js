export const LOAD_POSTS = "LOAD_POSTS";

export const getAllApprovedArticlesAction = (
   token,
   page = 0,
   size = 10,
   order = "id"
) => {
   return async (dispatch) => {
      try {
         const response = await fetch(
            "http://localhost:3035/posts/all?page=" +
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
