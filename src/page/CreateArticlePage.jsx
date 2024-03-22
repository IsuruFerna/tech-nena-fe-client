import { Container } from "react-bootstrap";
import { useState } from "react";
import { TOKEN, useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateArticlePage = () => {
   const reduxUser = useSelector((state) => state.user);
   const [postData, setPostData] = useState({
      title: "title",
      name: reduxUser.username,
      category: "tech",
      content: "",
      tags: ["tech"],
   });

   // gets token from localStorage
   const { getItem } = useLocalStorage(TOKEN);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      postContent(postData, getItem());

      // setPostData({
      //    title: "",
      //    name: "",
      //    category: "",
      //    content: "",
      //    tags: [],
      // });
   };

   const handleInput = (e) => {
      setPostData({
         ...postData,
         [e.target.name]: e.target.value,
      });
   };

   // creates new article and navigate to it
   const postContent = async (postData, token) => {
      try {
         const response = await fetch(
            import.meta.env.VITE_APP_BE_URL + "/posts/new",
            {
               method: "POST",
               body: JSON.stringify(postData),
               headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
               },
            }
         );

         if (!response.ok) {
            throw new Error("posting article issue!");
         }

         const data = await response.json();
         navigate("/article/" + data.id);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Container>
         {/* <AddCoverPhoto /> */}
         <form onSubmit={handleSubmit}>
            <div className="col-span-full">
               <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Title
               </label>
               <div className="mt-2">
                  <input
                     placeholder="Title"
                     id="title"
                     name="title"
                     value={postData.title}
                     onChange={handleInput}
                     className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  ></input>
               </div>
            </div>

            <div className="col-span-full">
               <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Description
               </label>
               <div className="mt-2">
                  <textarea
                     placeholder="Content"
                     id="content"
                     name="content"
                     value={postData.content}
                     onChange={handleInput}
                     rows="10"
                     className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  ></textarea>
               </div>
            </div>

            <div className="col-span-full">
               <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
               >
                  Tags
               </label>
               <div className="mt-2">
                  <input
                     placeholder="Title"
                     id="tags"
                     name="tags"
                     value={postData.tags}
                     onChange={handleInput}
                     className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  ></input>
               </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
               <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
               >
                  Cancel
               </button>
               <button
                  type="submit"
                  className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
               >
                  Post
               </button>
            </div>
         </form>
      </Container>
   );
};

export default CreateArticlePage;