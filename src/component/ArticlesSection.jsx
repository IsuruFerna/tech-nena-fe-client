import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getAllApprovedArticles } from "../fetchFunctions";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";

const ArticlesSection = () => {
  const [articles, setArticles] = useState(null);

  const [expand, setExpand] = useState(false);

  const getArticles = () => {
    getAllApprovedArticles().then((res) => {
      if (res) {
        setArticles(articles);
      }
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Row className="mt-4">
      <Col>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center card-bottom-text text-secondary">
              <p className="me-2 mb-0">
                <i className="bi bi-calendar me-1"></i>
                date
              </p>
              <p
                className={`pointer mb-0 ${expand ? "text-black" : ""}`}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <i className="bi bi-chat-left-dots-fill me-1"></i>
                Comments
              </p>
            </div>
            <div>
              <Button size="small" style={{ color: "#ecaf50" }}>
                Read More
              </Button>
            </div>
          </CardActions>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Comments</Typography>
              <div className="overflow-y-scroll" style={{ maxHeight: "120px" }}>
                <ul className="list-unstyled">
                  <li>cooment 1</li>
                  <li>cooment 1</li>
                  <li>cooment 1</li>
                  <li>cooment 1</li>
                  <li>cooment 1</li>
                  <li>cooment 1</li>
                </ul>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Form.Control type="text" placeholder="Comment article" />
                <i className="bi bi-send fs-4 ms-2 pointer"></i>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export { ArticlesSection };
