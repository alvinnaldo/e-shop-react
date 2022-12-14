import React from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import registerimg from "../Assets/register.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../helper";

const Register = () => {
  const [show, setShow] = React.useState(false);
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPass, setInputPass] = React.useState("");
  const [inputUser, setInputUser] = React.useState("");
  const showPass = () => setShow(!show);

  const registerClick = () => {
    Axios.post(`${API_URL}/user`, {
      username: inputUser,
      email: inputEmail,
      password: inputPass,
      role: "user",
    })
      .then(() => {
        alert("Berhasil mendaftar");
      })
      .catch(() => alert("Gagal mendaftar, terjadi kesalahan di server"));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="container">
        {/* For Desktop */}
        <div className="container w-75 d-none d-md-flex flex-row gap-5">
          <div className="d-flex align-items-center">
            <img src={registerimg} alt="" />
          </div>
          <div
            className="container d-flex flex-column px-4 py-4 border shadow"
            style={{ width: "400px" }}
          >
            <Text fontSize={16} fontWeight="bold">
              START FOR FREE
            </Text>
            <Text fontSize={30} fontWeight="bold">
              Sign up to E-SHOP
            </Text>
            <Text fontSize={13} marginTop={1}>
              Already a member?{" "}
              <Link to="/login" className="fw-bold text-decoration-underline">
                Sign in
              </Link>
            </Text>
            <div className="mt-3 w-100">
              <FormControl>
                <FormLabel fontSize={14}>Username</FormLabel>
                <Input
                  size="sm"
                  type="text"
                  onChange={(e) => setInputUser(e.target.value)}
                />
              </FormControl>
              <FormControl className="mt-2">
                <FormLabel fontSize={14}>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </FormControl>
              <FormControl className="mt-2">
                <FormLabel fontSize={14}>Password</FormLabel>
                <InputGroup>
                  <Input
                    size="sm"
                    type={show ? "text" : "password"}
                    onChange={(e) => setInputPass(e.target.value)}
                  />
                  {show ? (
                    <InputRightElement
                      cursor="pointer"
                      onClick={showPass}
                      children={<AiOutlineEye className="mb-1" />}
                    />
                  ) : (
                    <InputRightElement
                      cursor="pointer"
                      onClick={showPass}
                      children={<AiOutlineEyeInvisible className="mb-1" />}
                    />
                  )}
                </InputGroup>
              </FormControl>
            </div>
            <Button
              onClick={registerClick}
              colorScheme="teal"
              className="mt-3"
              size="sm"
            >
              Create an account
            </Button>
            <Text className="align-self-center" fontSize={14}>
              or
            </Text>
            <Button size="sm">
              <span>
                <FcGoogle size={20} style={{ marginRight: "5px" }} />
              </span>
              Sign up with Google
            </Button>
          </div>
        </div>
        {/* For Mobile */}
        <div
          className="container w-100 border d-flex d-md-none flex-row align-items-center shadow"
          style={{ height: "60vh" }}
        >
          <div>
            <img
              src={registerimg}
              alt=""
              style={{ width: "300px", height: "150px" }}
            />
          </div>
          <div
            className="container d-flex  flex-column"
            style={{ width: "300px" }}
          >
            <Text fontSize={12} fontWeight="bold">
              START FOR FREE
            </Text>
            <Text fontSize={18} fontWeight="bold">
              Sign up to E-SHOP
            </Text>
            <Text fontSize={10} marginTop={1}>
              Already a member?{" "}
              <Link to="/login" className="fw-bold text-decoration-underline">
                Sign in
              </Link>
            </Text>
            <div className="mt-1">
              <FormControl>
                <FormLabel fontSize={12}>Username</FormLabel>
                <Input
                  size="xs"
                  type="text"
                  onChange={(e) => setInputUser(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>Email</FormLabel>
                <Input
                  size="xs"
                  type="email"
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>Password</FormLabel>
                <InputGroup>
                  <Input
                    size="xs"
                    type={show ? "text" : "password"}
                    onChange={(e) => setInputPass(e.target.value)}
                  />
                  {show ? (
                    <InputRightElement
                      cursor="pointer"
                      onClick={showPass}
                      children={<AiOutlineEye className="mb-3" />}
                    />
                  ) : (
                    <InputRightElement
                      cursor="pointer"
                      onClick={showPass}
                      children={<AiOutlineEyeInvisible className="mb-3" />}
                    />
                  )}
                </InputGroup>
              </FormControl>
            </div>
            <Button
              onClick={registerClick}
              colorScheme="teal"
              className="mt-2"
              size="xs"
            >
              Create an account
            </Button>
            <Text className="align-self-center" fontSize={12}>
              or
            </Text>
            <Button size="xs">
              <span>
                <FcGoogle size={14} style={{ marginRight: "5px" }} />
              </span>
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
