import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../helper";
import { Button, Text } from "@chakra-ui/react";

const Detail = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const [idParams] = useSearchParams();
  const [id, setId] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setId(idParams.get("id"));
    Axios.get(`${API_URL}/products/?id=${id}`)
      .then((res) => {
        setDetailProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const buttonMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const buttonPlus = (stock) => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const printDetail = () => {
    return detailProduct.map((e) => {
      return (
        <div key={e.id}>
          <div className="d-flex flex-md-row flex-column justify-content-center gap-3">
            <img src={e.images} alt="" width={450} />
            <div className="align-self-center d-flex flex-column gap-3">
              <Text fontSize={35} fontWeight="bold">
                {e.name}
              </Text>
              <Text fontSize={28}>
                by <span className="text-muted fw-bold">{e.brand}</span>
              </Text>
              <Text fontSize={18}>
                Description<br></br>
                {e.description}
              </Text>
              <Text fontSize={35} color="teal" fontWeight="bold">
                Rp. {e.price.toLocaleString("id")}
              </Text>
              <div className="d-flex align-items-center gap-2">
                <Button
                  onClick={buttonMinus}
                  className="rounded-circle bg-dark text-light"
                  size="xs"
                  fontSize={22}
                >
                  <span className="mb-1">-</span>
                </Button>
                <strong className="text-muted" style={{ fontSize: "25px" }}>
                  {qty}
                </strong>
                <Button
                  onClick={() => buttonPlus(e.stock)}
                  className="rounded-circle bg-dark text-light"
                  size="xs"
                  fontSize={14}
                >
                  <span className="mb-1 fw-bold">+</span>
                </Button>
                <Button
                  className="w-75 "
                  variant="outline"
                  colorScheme="teal"
                  size="sm"
                >
                  Buy
                </Button>
              </div>
              <Text color="gray">Stock : {e.stock}</Text>
            </div>
          </div>
          <Text fontSize={35} color="gray" className="d-none d-md-inline">
            {e.category.toUpperCase()}
          </Text>
        </div>
      );
    });
  };
  return (
    <div className="container d-flex flex-column p-5">{printDetail()}</div>
  );
};

export default Detail;
