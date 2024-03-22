import { useNavigate } from "react-router-dom";
import { TOKEN, useLocalStorage } from "../hooks/useLocalStorage";

export const getAllCategories = () => {
   return fetch("http://localhost:3035/posts/categories")
      .then((res) => {
         if (res.ok) {
            return res.json();
         } else {
            throw new Error("Error in fetching categories");
         }
      })
      .then((data) => {
         return data;
      })
      .catch((err) => {
         console.log(err);
      });
};

// export const getAllApprovedArticles = async (
//    token,
//    page = 0,
//    size = 10,
//    order = "id"
// ) => {
//    // if (!page) {
//    //    page = 0;
//    // }
//    // if (!size) {
//    //    size = 10;
//    // }
//    // if (!order) {
//    //    order = "id";
//    // }

//    try {
//       const response = await fetch(
//          "http://localhost:3035/posts/all?page=" +
//             page +
//             "&size=" +
//             size +
//             "&order=" +
//             order,
//          {
//             headers: {
//                Authorization: "Bearer " + token,
//                "Content-Type": "application/json",
//             },
//          }
//       );

//       if (response.ok) {
//          const data = await response.json();
//          console.log("these are articles: ", data);
//          // dispatch({
//          //    type: LOAD_POSTS,
//          //    payload: data,
//          // });
//       }
//    } catch (error) {
//       console.log(error);
//    }

//    // return fetch(
//    //    "http://localhost:3035/posts/all?page=" +
//    //       page +
//    //       "&size=" +
//    //       size +
//    //       "&order=" +
//    //       order,
//    //    {
//    //       headers: {
//    //          Authorization: "Bearer " + token,
//    //          "Content-Type": "application/json",
//    //       },
//    //    }
//    // )
//    //    .then((res) => {
//    //       if (res.ok) {
//    //          return res.json();
//    //       } else {
//    //          throw new Error("Error in fetching posts");
//    //       }
//    //    })
//    //    .then((data) => {
//    //       console.log("this is articles: " + data);
//    //       return data;
//    //    })
//    //    .catch((err) => {
//    //       console.log(err);
//    //    });
// };

export const registerUser = (payload) => {
   return fetch("http://localhost:3035/auth/register", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         } else {
            throw new Error("Error in registering user");
         }
      })
      .then((data) => {
         console.log("registrazione ok");
         return data;
      })
      .catch((err) => {
         console.log(err);
      });
};

export const loginUser = (payload) => {
   return fetch("http://localhost:3035/auth/login", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         } else {
            throw new Error("Error in login user");
         }
      })
      .then((data) => {
         console.log("login ok");
         // localStorage.setItem("token", data.token);

         const { setItem } = useLocalStorage(TOKEN);
         setItem(data.token);

         return data;
      })
      .catch((err) => {
         console.log(err);
      });
};
