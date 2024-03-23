import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TOKEN, useLocalStorage } from "../hooks/useLocalStorage";
import { Container, Image, Row, Col } from "react-bootstrap";
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
         <Row>
            <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
               <h1 className="text-4xl">{article.title}</h1>
            </Col>
         </Row>

         <Row>
            <Col md lg={4}>
               <div>
                  {/* <img src={article.avatarUrl} alt="author picure" /> */}
                  <div className="flex justify-between py-1">
                     <p className="text-left">Author</p>
                     <p className="text-right w-100">
                        {article.name} {article.lastName}
                     </p>
                  </div>
               </div>
               <hr />

               <div className="flex justify-between py-1">
                  <p className="text-left">Release</p>
                  <p className="text-right w-100">
                     {new Date(article.postDate)
                        .toLocaleString()
                        .substring(0, 17)}
                  </p>
               </div>
               <hr />
               <div className="p-1">
                  <i className="bi bi-twitter-x  pe-2"></i>
                  <i className="bi bi-facebook pe-2"></i>
                  <i className="bi bi-linkedin pe-2"></i>
               </div>
            </Col>

            <Col md lg={8}>
               {article.postImage ? (
                  <Image src={article.postImage} />
               ) : (
                  <AddCoverPhoto
                     postId={article.id}
                     setArticle={setArticle}
                     article={article}
                  />
               )}
               <p className="pb-10">{article.content}</p>
               <hr />
               <div>
                  <p className="font-bold">Related terms</p>
                  <p>{article.postTags}</p>
               </div>
            </Col>
         </Row>
      </Container>
   );
};

export default ArticlePage;
