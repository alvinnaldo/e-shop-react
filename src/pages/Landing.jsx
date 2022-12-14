import React from "react";
import bg from "../Assets/landingbg.jpg";
import bantal from "../Assets/bantal.jpg";
import mejakamar from "../Assets/mejakamar.jfif";
import kursi from "../Assets/kursi.jpg";

const Landing = (props) => {
  return (
    <div>
      <div
        className="container-fluid border"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></div>
      <div className="container d-flex flex-column mt-5 mb-5 gap-3">
        <div className="d-flex flex-column flex-md-row mx-auto gap-3 w-75">
          <img src={bantal} alt="" width={300} className="shadow border" />
          <div className="align-self-center">
            <p style={{ fontSize: "30px" }}>IDALINNEA D</p>
            <p style={{ fontSize: "28px" }} className="lead text-muted">
              IKEA | Kitchen
            </p>
            <p style={{ fontSize: "14px" }}>
              Ritsleting yang tersembungi membuat sarung mudah dilepas. Sarung
              bantal dengan tampilan cermin karena memiliki pola yang sama di
              kedua sisi. Katun adalah bahan alami lembut dan mudah dirawat yang
              dapat Anda cuci dengan mesin cuci.{" "}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row mx-auto gap-3 w-75">
          <div className="align-self-center order-2 order-md-0">
            <p style={{ fontSize: "30px" }}>HAUGA V.2</p>
            <p style={{ fontSize: "28px" }} className="lead text-muted">
              Mr. DIY | Bedroom
            </p>
            <p style={{ fontSize: "14px" }}>
              Mudah untuk menyembunyikan kabel dan stopkontak tapi tetap dapat
              dijangkau dengan jalur kabel di bagian belakang.{" "}
            </p>
          </div>
          <img
            src={mejakamar}
            alt=""
            width={300}
            className="shadow border order-1"
          />
        </div>
        <div className="d-flex flex-column flex-md-row mb-5 mx-auto gap-3 w-75">
          <img src={kursi} alt="" width={300} className="border shadow" />
          <div className="align-self-center">
            <p style={{ fontSize: "30px" }}>LINNEBACK</p>
            <p style={{ fontSize: "28px" }} className="lead text-muted">
              IKEA | Livingroom
            </p>
            <p style={{ fontSize: "14px" }}>
              Lebar : 55cm Kedalaman : 69,5cm Tinggi : 72,4cm Lebar dudukan :
              57cm Kedalaman dudukan : 50cm Tinggi dudukan : 42,4cm Berat total
              : 6,50kg{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
