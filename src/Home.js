import React from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar color="faded" light style={{ width: "100%", position: "fixed", top: "0", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1000"}}>
                <NavbarBrand tag={Link} to="/"><img src='https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg' style={{height: "75px", width: "250px", }} alt='Divergent Smart Builds'></img></NavbarBrand>
                <button className='Estimate-Button'>Request A Quote</button>
            </Navbar>
            <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg' style={{ marginTop: "100px", height: "750px", width: "100%", position: "relative" }}></img>
            <Container style={{position: "absolute", top: "150px"}}>
                <Row>
                    <Col>
                        <h1>Discover Home Remodeling Excellence</h1>
                        <p>Your Dream Home Awaits, Let's Make It Happen</p>
                        <button color="secondary">GET A FREE ESTIMATE</button>
                    </Col>
                </Row>
            </Container>
            <footer>
                <Container>
                    <Row>
                        <p>footer</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>extra</p>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Home;
