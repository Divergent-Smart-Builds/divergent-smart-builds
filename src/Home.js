import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import bathroomRenoImage from './images/bathroom-reno.jpg';
import exteriorRenoImage from './images/exterior-reno.jpg';
import homeInteriorImage from './images/house-interior.jpg';
import constructionImage from './images/construction-work.jpg';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleForm = () => {
        setShowForm(true);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmission = (e) => {
        console.log("unIMPLEMENTED")
    }

    useEffect(() => {
        // Clear the form fields
        setShowForm(false);
        setEmail('');
        setPhoneNumber('');

    }, []);

    const form = showForm ? (
        <div className="confirm-backdrop">
            <div className="confirm-window">
            <Button onClick={() => { setShowForm(false); }} size="sm" color='danger' className="close-button">X</Button>
                <>
                    <form onSubmit={handleSubmission}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="form-group">
                            <p></p>
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                required
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>

                        <ButtonGroup style={{ marginLeft: "50%", marginTop: "25px" }}>
                            <Button type="submit" size="lg" className="btn btn-primary" color='primary'></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>PHONENUMBE</Button>
                        </ButtonGroup>
                    </form>
                </>
            </div>
        </div>
    ) : null;

    return (
        <div>
            {form}
            <Navbar color="faded" light style={{ width: "100%", position: "fixed", top: "0", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", paddingLeft: "15%", paddingRight: "15%" }}>
                <NavbarBrand tag={Link} to="/"><img src='https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg' style={{ height: "75px", width: "100%", }} alt='Divergent Smart Builds'></img></NavbarBrand>
                <button className='Estimate-Button'>Request A Quote</button>
            </Navbar>
            <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg' style={{ marginTop: "100px", height: "750px", width: "100%", position: "relative" }} alt='Aesthetically Pleasing Home'></img>
            <Container style={{ position: "absolute", top: "150px", textAlign: "center", width: "100%" }}>
                <Row>
                    <Col style={{ paddingLeft: "10%" }}>
                        <h1 style={{ marginBottom: "15px" }}>Divergent Smart Builds Ltd.</h1>
                        <p style={{ marginBottom: "25px" }}> text</p>
                        <button className='Estimate-Button' onClick={() => handleForm()}>GET A FREE ESTIMATE</button>
                    </Col>
                </Row>
            </Container>
            <Container style={{ paddingLeft: "20%", paddingRight: "20%", marginBottom: "25px" }}>
                <Row style={{ marginTop: "50px", textAlign: "center" }}>
                    <Col xs="12" md="6" style={{ alignSelf: "center" }}>
                        <b>We are a construction company, able to help with all of your needs</b>
                        <p></p>
                        <ul>
                            <li>Complete House Work</li>
                            <li>Kitchen Construction</li>
                            <li>Bathroom Construction</li>
                            <li>Basement Construction</li>
                            <li>Office & Commercial Construction</li>
                            <li>Exterior & Landscaping Construction</li>
                            <li>And More...</li>
                        </ul>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={homeInteriorImage} alt='House Interior' style={{ width: "100%" }}></img>
                    </Col>
                </Row>
            </Container>
            <div style={{ textAlign: "center", backgroundColor: "#006fb9", color: "#c3f6ff" }}>
                <h1 style={{ paddingTop: "35px" }}>Our Home Renovations Process</h1>
                <h5 style={{ paddingTop: "20px", marginBottom: "50px" }}>Trust us to streamline your process for worry free construction work. While we create your visions, going above and beyond</h5>
                <Container style={{ marginBottom: "50px" }}>
                    <Row>
                        <Col xs="12" md="3">
                            <h1>1</h1>
                            <b>Estimate/Quote</b>
                            <p></p>
                            <p>Either fill out the form or give us a call by pressing the button below.</p>
                        </Col>
                        <Col xs="12" md="3">
                            <h1>2</h1>
                            <b>Discussion</b>
                            <p></p>
                            <p>Let's finalize your plans and understand the exact visions desired, making sure everything is excellent.</p>
                        </Col>
                        <Col xs="12" md="3">
                            <h1>3</h1>
                            <b>Project Development</b>
                            <p></p>
                            <p>We will create variations of designs and plans. Then the best of the best to be chosen by you.</p>
                        </Col>
                        <Col xs="12" md="3">
                            <h1>4</h1>
                            <b>Construction Agreement</b>
                            <p></p>
                            <p>A date is set and construction work is started. We will update you on all the steps along the way.</p>
                        </Col>
                    </Row>
                </Container>
                <button style={{ marginBottom: "50px" }} className='Estimate-Button'>GET A FREE ESTIMATE</button>
            </div>
            <Container style={{ paddingLeft: "15%", paddingRight: "15%", marginTop: "50px" }}>
                <Row>
                    <Col>
                        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Services</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <p>Image here for Complete Remodeling</p>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Complete Remodeling</h4>
                        <p>Every space holds potential, and our team is adept at unlocking it. Whether it's a dated living room or a cramped office, we transform it into your dream space, ensuring it mirrors your unique taste and lifestyle.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Basement Renovation</h4>
                        <p>Turn your basement into a valuable, functional space with our expert renovation services. Our team specializes in transforming basements into beautiful, personalized areas that meet your needs, whether it's a family room, extra bedroom, or personal gym.</p>
                    </Col>
                    <Col xs="12" md="6">
                        <p>Image here for Basement Renovation</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <p>Image here for Kitchen & Bathroom Remodeling</p>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Kitchen Renovation</h4>
                        <p>The kitchen is where families bond and the bathroom is a personal retreat. We ensure both these spaces aren't just functional and resonate with luxury and comfort. From contemporary designs to classic elegance, we do it all.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Bathroom Renovation</h4>
                        <p>Transform your bathroom or kitchen with our professional refinishing services. Our team will modernize your spaces, enhancing functionality and aesthetic appeal to match your personal style. The result is a seamless blend of form and function that elevates your daily living experience.</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={bathroomRenoImage} alt='Finished Bathroom Renovation' style={{ width: "100%" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <p>Image here for Flooring</p>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Flooring</h4>
                        <p>The right floor can transform a space. Our experts guide you through materials, patterns, and finishes, ensuring your floor complements your decor and stands the test of time.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Landscaping & Exteriors</h4>
                        <p>From pathways to lights - everything to welcome a guest into your home comfortably</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={exteriorRenoImage} alt='Finished Exterior Renovation' style={{ width: "100%", maxHeight: "400px" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <p>Image here for Office Space Remodeling</p>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Office Space Remodeling</h4>
                        <p>An office isn't just about work. It's where ideas are born and visions realized. We transform office spaces, ensuring they reflect your business ethos while fostering creativity and productivity.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Pre & Post Construction</h4>
                        <p>Success lies in planning and support. We're with you every step of the way. We ensure smooth sailing from site evaluations and budget analysis in the pre-construction phase to providing post-construction documentation and warranty.</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={constructionImage} alt="Construction Work In Progress" style={{ width: "100%", maxHeight: "400px" }}></img>
                    </Col>
                </Row>
            </Container>
            <footer style={{ backgroundColor: "#006fb9", marginTop: "75px" }}>
                <Container>
                    <Row>
                        <p>footer</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>extra</p>
                        <br></br>
                        <br></br>
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
