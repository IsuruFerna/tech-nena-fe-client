import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Collapse,
   Typography,
} from "@mui/material";
import { TOKEN, useLocalStorage } from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { getAllApprovedArticlesAction } from "../redux/actions/post_action";
import { useNavigate } from "react-router-dom";

const ArticlesSection = () => {
   const { getItem } = useLocalStorage(TOKEN);

   const dispatch = useDispatch();
   const reduxPosts = useSelector((state) => state.posts);
   const navigate = useNavigate();

   const [expand, setExpand] = useState(false);

   // updates when a posts list length changes
   useEffect(() => {
      dispatch(getAllApprovedArticlesAction(getItem()));
   }, [reduxPosts.content.length]);

   return (
      <Row className="mt-4">
         {reduxPosts.content.length > 0 &&
            reduxPosts.content.map((post) => {
               let timeStamp = new Date(post.postData);

               return (
                  <Col key={post.id} className="mb-3">
                     <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                           component="img"
                           height="194"
                           image={
                              post.postImage || "https://placehold.co/600x400"
                           }
                           alt={post.title}
                        />
                        <CardContent>
                           <Typography variant="body2" color="text.secondary">
                              {post.content}
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
   );
};

export { ArticlesSection };
