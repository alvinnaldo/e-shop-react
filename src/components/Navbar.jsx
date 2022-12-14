import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
import { logoutAction } from "../actions/userAction";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });

  const logoutClick = () => {
    localStorage.removeItem("eshop_login");
    dispatch(logoutAction());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span
            className="fw-bold"
            style={{ color: "teal", marginRight: "25px" }}
          >
            E-SHOP
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link
                to="/products"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <Text color="teal">Products</Text>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "20px" }}>
              <Link className="nav-link active" href="#">
                <Text color="teal">About</Text>
              </Link>
            </li>
          </ul>
          {props.loader ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal"
              size="md"
            />
          ) : (
            <form>
              {username ? (
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <Text color="teal">{username}</Text>
                  <Button colorScheme="teal" size="sm">
                    <BiCart size={20} />
                  </Button>
                  <Button onClick={logoutClick} colorScheme="teal" size="sm">
                    Logout
                  </Button>
                </div>
              ) : (
                <ButtonGroup className="d-flex align-items-center justify-content-center">
                  <Link to="/login">
                    <Button colorScheme="teal" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button colorScheme="cyan" variant="outline" size="sm">
                      Register
                    </Button>
                  </Link>
                </ButtonGroup>
              )}
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
