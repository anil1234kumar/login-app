import React from "react";
import Layout from "../../component/layout/Layout";
import CategaryCard from "../../component/card/CategaryCard";
import { Col, Container, Row } from "react-bootstrap";
import animal from "../../asset/img/animal.jpg";
import bird from "../../asset/img/bird.jpg";
import plant from "../../asset/img/plant.jpg";
import fish from "../../asset/img/fish.jpg";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  const typeCard = [
    {
      id: 1,
      category: "Animals",
      img: animal,
      path: "/animal",
    },
    {
      id: 2,
      category: "Birds",
      img: bird,
      path: "/birds",
    },
    {
      id: 3,
      category: "Plants",
      img: plant,
      path: "/trees",
    },
    {
      id: 4,
      category: "Fish",
      img: fish,
      path: "/fishes",
    },
  ];

  const typeCardlist = typeCard.map((type) => (
    <Col lg={3} key={type.id}>
      <Link to={type.path}>
        <CategaryCard
          categoryDesign={true}
          category={type.category}
          img={type.img}
        />
      </Link>
    </Col>
  ));

  return (
    <>
      <Layout>
        <div id="module" className="content-area custom-cursor ">
          <section className="first-sec">
            <Container>
              <Row>{typeCardlist}</Row>
            </Container>
          </section>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            molestiae nisi?
          </p>
          <div className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            molestiae nisi?
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            molestiae nisi?
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>ccc</td>
              <td>sdjjfhdshjf</td>
              <td>dsfhjdsjhfdsf</td>
              <td>ccc</td>
            </tr>
            <tr>
              <td>ccc</td>
              <td>sdjjfhdshjf</td>
              <td>dsfhjdsjhfdsf</td>
              <td>sdjjfhdshjf</td>
            </tr>
            <tr>
              <td>ccc</td>
              <td>sdjjfhdshjf</td>
              <td>dsfhjdsjhfdsf</td>
              <td>dsfhjdsjhfdsf</td>
            </tr>
            <tr>
              <td>ccc</td>
              <td>sdjjfhdshjf</td>
              <td>dsfhjdsjhfdsf</td>
            </tr>
          </tbody>
        </table>
        {/* practice */}
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-item">Home</li>
            <li class="menu-item">Home</li>
            <li class="menu-item">Home</li>
            <li class="menu-item">Home</li>
            <li class="menu-item">Home</li>
            <li class="menu-item">Home</li>
            <li class="menu-item">About</li>
            <li class="menu-item">Services</li>
            <li class="menu-item">Contact</li>
            <li class="menu-item">Contact</li>
            <li class="menu-item">Contact</li>
            <li class="menu-item">Contact</li>
            <li class="menu-item">Contact</li>
            <li class="menu-item">Contact</li>
          </ul>
        </nav>
      </Layout>
    </>
  );
};

export default Landing;
