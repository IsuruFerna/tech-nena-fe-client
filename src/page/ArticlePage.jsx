import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TOKEN, useLocalStorage } from "../hooks/useLocalStorage";
import { Container, Image } from "react-bootstrap";
import AddCoverPhoto from "../component/post/AddCoverPhoto";

const ArticlePage = () => {
   const params = useParams();
   // gets token from localStorage
   const { getItem } = useLocalStorage(TOKEN);

   const [article, setArticle] = useState({
      approved: false,
      category: "",
      content: "",
      id: "",
      postDate: "",
      postImage: null,
      postTags: [],
      state: "",
      title: "",
      userId: "",
      name: "",
      lastName: "",
      username: "",
      avatarUrl: "",
   });

   const getArticle = async () => {
      try {
         const response = await fetch(
            import.meta.env.VITE_APP_BE_URL + "/posts/" + params.postId,
            {
               headers: {
                  Authorization: "Bearer " + getItem(),
                  "Content-Type": "application/json",
               },
            }
         );

         if (!response.ok) {
            throw new Error("fetching article error!");
         }

         const data = await response.json();
         console.log("this is the article: ", data);
         setArticle({
            approved: data.approved,
            category: data.category,
            content: data.content,
            id: data.id,
            postDate: data.postDate,
            postImage: data.postImage,
            postTags: data.postTags,
            state: data.state,
            title: data.title,
            userId: data.user.id,
            name: data.user.name,
            lastName: data.user.lastname,
            username: data.user.username,
            avatarUrl: data.user.avatarUrl,
         });
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      console.log("this is params: " + params.postId);
      getArticle();
   }, [article.postImage]);

   return (
      <Container>
         <h1 className="text-4xl">{article.title}</h1>
         {article.postImage ? (
            <Image src={article.postImage} />
         ) : (
            <AddCoverPhoto
               postId={article.id}
               setArticle={setArticle}
               article={article}
            />
         )}
         <p>{article.content}</p>
         <div>
            <div>
               {" "}
               <img src={article.avatarUrl} alt="author picure" />
               <p>
                  Author: {article.name} {article.lastName}
               </p>
            </div>

            <div>
               <p>
                  {new Date(article.postDate).toLocaleString().substring(0, 17)}
               </p>
            </div>
         </div>
      </Container>
   );
};

export default ArticlePage;
