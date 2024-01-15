import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import bathroomRenoImage from './images/bathroom-reno.jpg';
import exteriorRenoImage from './images/exterior-reno.jpg';
import homeInteriorImage from './images/house-interior.jpg';
import constructionImage from './images/construction-work.jpg';
import landingImage from './images/landing-image.jpg';
import logo from './images/logo.png';
//import completeImage from './images/complete-work.jpg';
//import flooringImage from './images/flooring.jpg';

const Home = () => {
    const gallery = [
        exteriorRenoImage,
        homeInteriorImage,
        constructionImage,
        bathroomRenoImage
    ];

    const [showForm, setShowForm] = useState(false);
    // const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [name, setName] = useState('');
    // const [perferredContact, setPreferredContact] = useState('');
    const [selectedImage, setSelectedImage] = useState(gallery[0]);
    const [shrink, setShrink] = useState(false);

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePhoneNumberChange = (e) => {
    //     setPhoneNumber(e.target.value);
    // }

    const handleSubmission = (e) => {
        console.log("unIMPLEMENTED")
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    };

    useEffect(() => {
        // Clear the form fields
        setShowForm(false);
        // setEmail('');
        // setPhoneNumber('');

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const form = showForm ? (
        <div className="confirm-backdrop">
            <div className="confirm-window">
                <Button onClick={() => { setShowForm(false); }} size="sm" color='danger' className="close-button">X</Button>
                <>
                    <form onSubmit={handleSubmission}>
                        <p style={{textAlign: "center"}}>Please give us a call or email us with the buttons below</p>
                        {/*<div className="form-group">
                            <label htmlFor="email">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>

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
                        <div>
                            <p>Please select your perferred contact method</p>
                        </div>
                        <div>
                            <ButtonGroup style={{ marginLeft: "75%", marginTop: "25px" }}>
                                <p>Or Call Us Now</p>
                                <Button onClick={() => { setPreferredContact("email") }} type="submit" size="lg" className="btn btn-primary" color='primary'>Submit</Button>
                            </ButtonGroup>
                        </div>
                        <div>
                        </div> */}
                        <ButtonGroup className='custom-button-group'>
                            <Button className='Estimate-Button'><a style={{color: "black"}} href="tel:4037080548">Call us at (403)-708-0548</a></Button>
                            <Button className='Estimate-Button-Right'><a style={{color: "black"}} href="mailto:divergent.smart.builds.786@gmail.com">divergent.smart.builds.786@gmail.com</a></Button>
                        </ButtonGroup>
                    </form>
                </>
            </div>
        </div>
    ) : null;

    return (
        <div>
            {form}
            <Navbar color="faded" light fixed="top" style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                paddingLeft: shrink ? '20%' : "15%",
                paddingRight: shrink ? '20%' : "15%",
                zIndex: "1500",
                height: shrink ? '65px' : '100px',
                transition: 'padding 0.5s ease, height 1s ease'
            }}>
                <NavbarBrand tag={Link} to="/">
                    <img src={logo}
                        alt='Divergent Smart Builds'
                        style={{
                            height: shrink ? '75px' : '125px',
                            transition: 'height 0.5s ease' // Smooth transition for image height
                        }}
                    />
                </NavbarBrand>
                <button onClick={() => { setShowForm(true) }} className='Estimate-Button' style={{
                    minWidth: '130px',
                    width: shrink ? '10%' : '15%',
                    height: shrink ? '25px' : '50px',
                    marginTop: shrink ? '-25px' : '-50px',
                    transition: 'width 0.5s ease, height 0.5s ease, min-width 0.5s ease' // Smooth transition for button scaling
                }}>Request A Quote</button>
            </Navbar>
            <img src={landingImage} style={{ marginTop: "100px", height: "750px", width: "100%", position: "relative" }} alt='Aesthetically Pleasing Home'></img>
            <div style={{ position: "absolute", top: "150px", textAlign: "center", width: "100%" }}>
                <h1 style={{ marginBottom: "15px", color: "#2EC0F9" }}>Divergent Smart Builds</h1>
                <p style={{ marginBottom: "25px", color: "#2EC0F9" }}>Building Dreams</p>
                <button className='Estimate-Button' onClick={() => { setShowForm(true) }}>GET A FREE ESTIMATE</button>
            </div>
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
            <Container style={{ marginBottom: "50px" }}>
                <hr className='section-divider' />
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Gallery</h1>
                <Row>
                    <Col md="10">
                        <img src={selectedImage} alt="selected" style={{ width: '100%', maxHeight: '700px' }} />
                    </Col>

                    <Col md="2" style={{ overflowY: 'auto', maxHeight: '700px' }}>
                        {gallery.map((image, index) => (
                            <div key={index} className={selectedImage === image ? 'selected-thumbnail' : ''} onClick={() => setSelectedImage(image)}>
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{ width: '100%', height: 'auto', cursor: 'pointer', marginBottom: '10px', filter: selectedImage === image ? 'brightness(50%)' : 'none' }}
                                />
                            </div>
                        ))}
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
                            <b>Construction Agreement</b>
                            <p></p>
                            <p>A date is set and construction work is started. We will update you on all the steps along the way.</p>
                        </Col>
                        <Col xs="12" md="3">
                            <h1>3</h1>
                            <b>Discussion</b>
                            <p></p>
                            <p>Let's finalize your plans and understand the exact visions desired, making sure everything is excellent.</p>
                        </Col>
                        <Col xs="12" md="3">
                            <h1>4</h1>
                            <b>Project Development</b>
                            <p></p>
                            <p>We will create variations of designs and plans. Then the best of the best to be chosen by you.</p>
                        </Col>
                    </Row>
                </Container>
                <button onClick={() => { setShowForm(true) }} style={{ marginBottom: "50px" }} className='Estimate-Button'>GET A FREE ESTIMATE</button>
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
            <Container>
                <Row>
                    <Col>
                        <img src='' alt='placeholder' style={{ width: "50px", height: "100%", alignSelf: "center" }}></img>
                    </Col>
                    <Col>
                        <img src='' alt='placeholder'></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src='' alt='placeholder'></img>
                    </Col>
                    <Col>
                        <img src='' alt='placeholder'></img>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1>About Divergent Smart Builds</h1>
                        <p></p>
                    </Col>
                </Row>
            </Container>
            <footer style={{ backgroundColor: "#006fb9", marginTop: "75px" }}>
                <Container>
                    <Row>
                        <h1>Divergent Smart Builds</h1>
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
