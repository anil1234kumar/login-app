import React from "react";
import { Button, Container, Nav, Offcanvas, Navbar } from "react-bootstrap";
import "./Navigationbar.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";

function Navigationbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-link">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container fluid>
              <Link to="#">Navbar Offcanvas</Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand`}
                aria-labelledby={`offcanvasNavbarLabel-expand`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                    <Link href="#">Why</Link>
                    <Link href="#">Our</Link>
                    <Link href="#">Eco</Link>
                    <Link href="#">market</Link>
                    <Link href="#">Exchange</Link>
                    <Link href="#">swap</Link>
                    <CustomButton
                      onClick={() => navigate("/login")}
                      variant="primary"
                      title="login"
                    />

                    <CustomButton
                      onClick={() => navigate("/signup")}
                      variant="primary"
                      title="Register"
                    ></CustomButton>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Navigationbar;
