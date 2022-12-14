import React, { useState, useRef, useEffect } from "react";
import { Input, Text, Select, Button, Spinner } from "@chakra-ui/react";
// import Axios from "axios";
// import { API_URL } from "../helper";
import { getProducts } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterredProduct, setFilterredProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const name = useRef("");
  const brand = useRef("");
  const category = useRef("");
  const min = useRef("");
  const max = useRef("");

  const { globalProducts } = useSelector((state) => {
    return {
      globalProducts: state.productReducer.products,
    };
  });

  const filterBtnHandler = () => {
    setFilterredProduct(
      globalProducts.filter(
        (val) =>
          val.name.toLowerCase().includes(name.current.value) &&
          val.brand.includes(brand.current.value) &&
          val.category.includes(category.current.value) &&
          val.price >= (min.current.value === "" ? 0 : min.current.value) &&
          val.price <= (max.current.value === "" ? Infinity : max.current.value)
      )
    );
  };

  const resetBtnHandler = () => {
    dispatch(getProducts());
    name.current.value = "";
    brand.current.value = "";
    category.current.value = "";
    min.current.value = "";
    max.current.value = "";
  };

  const sortAsc = () => {
    setFilterredProduct(
      filterredProduct.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
    );
  };

  const sortDesc = () => {
    setFilterredProduct(
      filterredProduct.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      })
    );
  };

  const sortAscPrice = () => {
    setFilterredProduct(filterredProduct.sort((a, b) => a.price - b.price));
  };

  const sortDescPrice = () => {
    setFilterredProduct(filterredProduct.sort((a, b) => b.price - a.price));
  };
  // const getAllProducts = () => {
  //   Axios.get(`${API_URL}/products`)
  //     .then((res) => {
  //       dispatch(getProducts(res.data));
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    // getAllProducts();
    dispatch(getProducts());
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilterredProduct(globalProducts);
  }, [globalProducts]);

  return (
    <div className="container d-flex flex-column p-3">
      <Text fontSize={35} color="gray" fontWeight="bold">
        Our Arrival products
      </Text>
      <Text className="mb-3">
        Choose product and{" "}
        <span className="fw-bold">transact more easily.</span>
      </Text>
      <div
        className="d-flex flex-md-row gap-4 flex-column mx-auto"
        style={{ width: "80vw" }}
      >
        <div
          className="h-100 p-3 w-auto d-flex flex-column gap-3 "
          style={{ backgroundColor: "teal" }}
        >
          <Text color="white" fontWeight="bold" fontSize={20}>
            Filter
          </Text>
          <Input placeholder="Name" bgColor="white" size="sm" ref={name} />
          <Select
            bgColor="white"
            size="sm"
            placeholder="Select brand"
            ref={brand}
          >
            <option value="IKEA">IKEA</option>
            <option value="Mr. DIY">Mr. DIY</option>
            <option value="ACE">ACE</option>
          </Select>
          <Select
            bgColor="white"
            size="sm"
            placeholder="Select category"
            ref={category}
          >
            <option value="Livingroom">Livingroom</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
          </Select>
          <div className="d-flex gap-2">
            <Input
              placeholder="Minimum"
              bgColor="white"
              size="sm"
              className="w-50"
              type="number"
              ref={min}
            />
            <Input
              placeholder="Maximum"
              bgColor="white"
              size="sm"
              className="w-50"
              type="number"
              ref={max}
            />
          </div>
          <div className="d-flex align-items-center gap-2 flex-column">
            <Button size="sm" colorScheme="cyan" onClick={sortAsc}>
              Sort A-Z
            </Button>
            <Button size="sm" colorScheme="yellow" onClick={sortDesc}>
              Sort Z-A
            </Button>
            <Button size="sm" colorScheme="yellow" onClick={sortAscPrice}>
              Sort Lowest Price
            </Button>
            <Button size="sm" colorScheme="yellow" onClick={sortDescPrice}>
              Sort Highest Price
            </Button>
          </div>
          <div className="d-flex justify-content-around">
            <Button size="sm" colorScheme="cyan" onClick={filterBtnHandler}>
              Filter
            </Button>
            <Button size="sm" colorScheme="yellow" onClick={resetBtnHandler}>
              Reset
            </Button>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {loader ? (
              <Spinner color="teal" size="xl"></Spinner>
            ) : filterredProduct.length ? (
              filterredProduct.map((e) => {
                return (
                  <div
                    onClick={() => navigate(`/detail?id=${e.id}`)}
                    key={e.id}
                    className="col-md-6 col-12 col-lg-4 position-relative mb-5 "
                    style={{ width: "270px" }}
                  >
                    <img src={e.images} alt="" width={250} className="shadow" />
                    <div
                      className=" w-75 position-absolute shadow p-1 rounded"
                      style={{
                        bottom: "-10%",
                        left: "13%",
                        backgroundColor: "teal",
                      }}
                    >
                      <Text color="white" className="fw-bold text-center">
                        Rp. {e.price.toLocaleString("id")}
                      </Text>
                      <Text color="white" className="text-center">
                        {e.name}
                      </Text>
                    </div>
                  </div>
                );
              })
            ) : (
              <Text
                color="teal"
                className="text-center"
                fontWeight="bold"
                fontSize={30}
              >
                Product not found, please reset the filter...
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
