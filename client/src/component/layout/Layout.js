import React, { useContext } from "react";
import Navigationbar from "../header/Navigationbar";
import Footerbar from "../footerbar/Footerbar";
import { ThemeContext } from "../theme/ThemeProvider";
import "./Layout.scss";
import { Button, Container, Form } from "react-bootstrap";
import DotRing from "../cursour/DotRing";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`${theme}`}>
      <DotRing />
      <section>
        <header>
          <Container>
            <div className="nav-design">
              <Navigationbar />
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                onClick={toggleTheme}
              />
            </div>
          </Container>
        </header>
        {children}
        <Footerbar />
      </section>
    </main>
  );
};

export default Layout;
