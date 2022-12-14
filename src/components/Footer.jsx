import React from "react";
import { Show, Text } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="container-fluid p-3 mb-1 bg-light rounded position-absolute top-100 ">
      <div className="d-flex flex-row justify-content-around">
        <div>
          <Link
            to="/"
            className="d-flex flex-row"
            style={{ gap: "5px", textDecorationStyle: "" }}
          >
            <Text color="teal" className="fw-bold">
              E-SHOP
            </Text>
            <span>|</span>
            <span>Furniture</span>
          </Link>
        </div>
        <Show above="md">
          <div className=" d-flex flex-column" id="products">
            <span className="fw-bold">Products</span>
            <span>Livingroom</span>
            <span>Bedroom</span>
            <span>Kitchen</span>
          </div>
          <div className="d-flex flex-column" id="company">
            <span className="fw-bold">Company</span>
            <span>About us</span>
            <span>Career</span>
          </div>
          <div className="d-flex flex-column" id="follow">
            <span className="fw-bold">Follow us</span>
            <span className="d-flex fle'x-row">
              <AiFillFacebook size={30} color="teal" />
              <AiFillInstagram size={30} color="teal" />
              <AiFillTwitterCircle size={30} color="teal" />
            </span>
          </div>
        </Show>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Text color="gray" fontSize="sm">
          © 2022 ESHOPEngineer. All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
