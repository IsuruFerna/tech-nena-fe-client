import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import { getAllCategories } from "../fetchFunctions";
import { Menu, MenuItem } from "@mui/material";

const Home = () => {
  const [categories, setCategories] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCategories = () => {
    getAllCategories().then((data) => {
      console.log(data);
      setCategories(data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {/* CAROUSEL GOES HERE */}
      <Container>
        <Row className="mt-5">
          <Col className="d-flex align-items-center justify-content-between">
            <div>
              <h5 className="m-0">Latest Articles</h5>
            </div>
            <div>
              {categories && (
                <ul className="list-unstyled d-flex align-items-center m-0">
                  <li className="mx-2 pointer" onClick={handleClick}>
                    All
                  </li>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {categories.map((cat, i) => {
                      return (
                        <MenuItem key={i} onClick={handleClose}>
                          {cat}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                  {categories.slice(1, 4).map((cat, i) => {
                    return (
                      <li key={i} className="mx-2 pointer d-md-flex d-none">
                        {cat}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                placeholder="Search articles"
                className="border border-end-0 search-hero"
              />
              <div
                className="border-start-0 border rounded-end-3 p-1"
                style={{ height: "38px" }}
              >
                <i className="bi bi-search fs-5"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
