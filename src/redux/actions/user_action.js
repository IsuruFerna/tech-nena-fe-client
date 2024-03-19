export const USER_DETAILS = "USER_DETAILS";

export const saveUserAction = (token) => {
   return async (dispatch) => {
      try {
         const response = await fetch(
            import.meta.env.VITE_APP_BE_URL + "/users/profile/me",
            {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token,
               },
            }
         );

         if (response.ok) {
            const data = await response.json();
            console.log("response ok: ", data);

            dispatch({
               type: USER_DETAILS,
               payload: data,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };
};
