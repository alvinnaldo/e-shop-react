import React from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
  Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Axios from "axios";
import { loginAction } from "../actions/userAction";
import { useDispatch } from "react-redux";
import { API_URL } from "../helper";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // untuk menjalankan action redux
  const [show, setShow] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPass, setInputPass] = React.useState("");

  const showPass = () => setShow(!show);

  const loginClick = () => {
    // Melakukan request data ke json-server
    Axios.get(`${API_URL}/user?email=${inputEmail}&password=${inputPass}`)
      .then((response) => {
        if (response.data[0]) {
          setShowAlert(false);
          delete response.data[0].password;
          localStorage.setItem("eshop_login", JSON.stringify(response.data[0]));
          dispatch(loginAction(response.data[0]));
          navigate("/", { replace: true });
        } else {
          setShowAlert(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      {showAlert ? (
        <Center>
          <Alert status="error" className="mb-3" height={10} fontSize={14}>
            <AlertIcon />
            Gagal Login, Email atau Password salah !!!
          </Alert>
        </Center>
      ) : null}

      <div className="container">
        {/* For Desktop */}
        <div className="container w-25 border p-3 d-none d-md-flex flex-column justify-content-center align-items-start shadow">
          <div>
            <Text className="fw-bold" fontSize="xl">
              Sign in for shopping
            </Text>
            <Text fontSize="xs">
              Not have an account ?{" "}
              <Link
                to="/register"
                className="fw-bold text-decoration-underline"
              >
                Register
              </Link>
            </Text>
          </div>
          <div className="mt-3 w-100">
            <FormControl>
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
          <div className="align-self-end mt-2">
            <Text color="gray" fontSize="xs">
              Forgot password ?{" "}
              <Link className="text-decoration-underline">Click here</Link>
            </Text>
          </div>
          <div className="mt-3 container">
            <Button colorScheme="teal" size="sm" w="100%" onClick={loginClick}>
              Login
            </Button>
          </div>
        </div>
        {/* For Mobile */}
        <div className="container w-100 mt-5 border p-5 d-md-none d-flex flex-column justify-content-center align-items-start shadow ">
          <div>
            <Text className="fw-bold" fontSize="xl">
              Sign in for shopping
            </Text>
            <Text fontSize="xs">
              Not have an account ?{" "}
              <Link
                to="/register"
                className="fw-bold text-decoration-underline"
              >
                Register
              </Link>
            </Text>
          </div>
          <div className="mt-3 w-100">
            <FormControl>
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
          <div className="align-self-end mt-2">
            <Text color="gray" fontSize="xs">
              Forgot password ?{" "}
              <Link className="text-decoration-underline">Click here</Link>
            </Text>
          </div>
          <div className="mt-3 container">
            <Button colorScheme="teal" size="sm" w="100%" onClick={loginClick}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
