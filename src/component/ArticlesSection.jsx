import { useEffect, useState } from "react";
import { Col, Form, Row, Container } from "react-bootstrap";
import {
   Alert,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Collapse,
   Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchApprovedAriclesData } from "../redux/actions/post_action";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../UI/SpinnerLoading";
import AlertTitle from "@mui/material/AlertTitle";

const ArticlesSection = () => {
   const dispatch = useDispatch();
   const { articles, isLoading, error } = useSelector(
      (state) => state.approvedArticles
   );
   const navigate = useNavigate();

   const [expand, setExpand] = useState(false);

   // updates when a posts list length changes
   useEffect(() => {
      dispatch(fetchApprovedAriclesData());

      console.log("this is approved articles: " + articles);
   }, [articles.length]);

   return (
      <Container>
         <Row className="mt-4 px-4">
            {/* when loads articles */}
            {isLoading && <SpinnerLoading />}

            {/* if there's any error when fetching articles */}
            {error && (
               <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
               </Alert>
            )}

            {/* if there's no approved articles */}
            {articles.length === 0 && <div>There is no approved article</div>}

            {/* if there are articles */}
            {articles.length > 0 &&
               articles.map((post) => {
                  let timeStamp = new Date(post.postData);

                  return (
                     <Col
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        key={post.id}
                        className="mb-3"
                     >
                        <Card sx={{ maxWidth: 345 }}>
                           <CardMedia
                              component="img"
                              height="194"
                              image={
                                 post.postImage ||
                                 "https://placehold.co/600x400"
                              }
                              alt={post.title}
                           />
                           <CardContent>
                              <Typography
                                 variant="body2"
                                 color="text.secondary"
                              >
                                 {post.title}
                              </Typography>
                           </CardContent>
                           <CardActions
                              disableSpacing
                              className="d-flex justify-content-between align-items-center"
                           >
                              <div className="d-flex align-items-center card-bottom-text text-secondary">
                                 <div className="me-2 mb-0 text-xs">
                                    <i className="bi bi-calendar me-1"></i>
                                    <p className="article-timestamp">
                                       {timeStamp
                                          .toLocaleString()
                                          .substring(0, 17)}
                                    </p>
                                 </div>
                                 <p
                                    className={`pointer mb-0 ${
                                       expand ? "text-black" : ""
                                    }`}
                                    onClick={() => {
                                       setExpand(!expand);
                                    }}
                                 >
                                    <i className="bi bi-chat-left-dots-fill me-1"></i>
                                    Comments
                                 </p>
                              </div>
                              <div>
                                 <Button
                                    onClick={() => {
                                       navigate("article/" + post.id);
                                    }}
                                    size="small"
                                    style={{ color: "#ecaf50" }}
                                 >
                                    Read More
                                 </Button>
                              </div>
                           </CardActions>
                           <Collapse in={expand} timeout="auto" unmountOnExit>
                              <CardContent>
                                 <Typography paragraph>Comments</Typography>
                                 <div
                                    className="overflow-y-scroll"
                                    style={{ maxHeight: "120px" }}
                                 >
                                    <ul className="list-unstyled">
                                       {/* THE LI TO MAP FOR OBTAIN COMMENTS LIST FOR A POST */}
                                       <li className="d-flex align-items-center">
                                          <div style={{ width: "20%" }}>
                                             <img
                                                src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"
                                                alt="user-img"
                                                style={{ width: "100%" }}
                                             />
                                          </div>
                                          <div>
                                             <p
                                                className="m-0 fw-bold"
                                                style={{ fontSize: "0.8em" }}
                                             >
                                                Username
                                             </p>
                                             <p
                                                className="m-0"
                                                style={{ fontSize: "0.8em" }}
                                             >
                                                Commento
                                             </p>
                                          </div>
                                       </li>
                                       {/* THE LI TO MAP FOR OBTAIN COMMENTS LIST FOR A POST */}
                                    </ul>
                                 </div>
                                 <div className="d-flex align-items-center mt-3">
                                    <Form.Control
                                       type="text"
                                       placeholder="Comment article"
                                    />
                                    <i className="bi bi-send fs-4 ms-2 pointer"></i>
                                 </div>
                              </CardContent>
                           </Collapse>
                        </Card>
                     </Col>
                  );
               })}
         </Row>
      </Container>
   );
};

export { ArticlesSection };
