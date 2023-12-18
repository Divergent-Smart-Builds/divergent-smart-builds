import React from 'react';
import { 
  Button,
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">STRONGRIDGE DEVELOPMENTS</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <Button color="primary">REQUEST A QUOTE</Button>
        </Nav>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Discover Home Remodeling Excellence</h1>
            <p>Your Dream Home Awaits, Let's Make It Happen</p>
            <Button color="secondary">GET A FREE ESTIMATE</Button>
          </Col>
          <Col>
            {/* Content for the right side of the page, such as images or additional text */}
          </Col>
        </Row>
      </Container>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default Home;
