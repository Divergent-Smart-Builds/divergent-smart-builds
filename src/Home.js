import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import bathroomRenoImage from './images/bathroom-reno.jpg';
import exteriorRenoImage from './images/exterior-reno.jpg';
import homeInteriorImage from './images/house-interior.jpg';
import constructionImage from './images/construction-work.jpg';
import landingImage from './images/landing-image-crop.jpg';
import apartmentImage from './images/apartment.jpg';
import kitchenImage from './images/kitchen.jpg';
import bathroomImage from './images/bathroom.jpg';
import commercialBathroomImage from './images/commercial-bathroom.jpg';
import commercialStallsImage from './images/commercial-stalls.jpg';
import paintImage from './images/paint.jpg';
import roofingImage from './images/roofing.jpg';
import sidingImage from './images/siding.jpg';

const Home = () => {
    const gallery = [
        exteriorRenoImage,
        homeInteriorImage,
        constructionImage,
        bathroomRenoImage,
        apartmentImage,
        kitchenImage,
        bathroomImage,
        commercialBathroomImage,
        commercialStallsImage,
        paintImage,
        roofingImage,
        sidingImage,
    ];

    const [showForm, setShowForm] = useState(false);
    const [selectedImage, setSelectedImage] = useState(gallery[0]);
    const [shrink, setShrink] = useState(false);
    const imageRef = useRef(null);
    const [imageHeight, setImageHeight] = useState('auto');

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

    const handleImageLoad = () => {
        if (imageRef.current) {
            setImageHeight(`${imageRef.current.offsetHeight}px`);
        }
    };

    useEffect(() => {
        // Clear the form
        setShowForm(false);

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
                        <p style={{ textAlign: "center" }}>Please give us a call or email us with the buttons below</p>
                        <ButtonGroup className='custom-button-group'>
                            <Button className='Estimate-Button'><a style={{ color: "black" }} href="tel:4037080548">Call us at (403)-708-0548</a></Button>
                        </ButtonGroup>
                        <ButtonGroup className='custom-button-group'>
                            <Button className='Estimate-Button'><a style={{ color: "black" }} href="mailto:divergent.smart.builds.786@gmail.com">divergent.smart.builds.786@gmail.com</a></Button>
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
                paddingRight: "5vw",
                paddingLeft: "5vw",
                zIndex: "1500",
                height: shrink ? '100px' : '175px',
                transition: 'padding 0.5s ease, height 1s ease'
            }}>
                <NavbarBrand tag={Link} to="/">
                    <img src={logo}
                        alt='Divergent Smart Builds'
                        style={{
                            maxWidth: shrink ? "25vw" : "40vw",
                            maxHeight: shrink ? "120px" : "175px",
                            transition: 'width 0.5s ease, height 0.5s ease, max-width 0.5s ease, max-height 0.5s ease',
                        }}
                    />
                </NavbarBrand>
                <button onClick={() => { setShowForm(true) }} className='Estimate-Button' style={{
                    minWidth: shrink ? "100px" : "75px",
                    height: shrink ? '25px' : '50px',
                    fontSize: shrink ? '5px' : '10px',
                    transition: 'width 0.5s ease, height 0.5s ease, min-width 0.5s ease'
                }}>Request A Quote</button>
            </Navbar>
            <img src={landingImage} style={{ marginTop: "175px", height: "100%", width: "100%", position: "relative" }} alt='Aesthetically Pleasing Home'></img>
            <div style={{ position: "absolute", top: "150px", textAlign: "center", width: "100%" }}>
                <h1 style={{ marginBottom: "15px", color: "#2EC0F9" }}>Divergent Smart Builds</h1>
                <p style={{ marginBottom: "25px", color: "#2EC0F9" }}>Building Dreams</p>
                <button className='Estimate-Button' onClick={() => { setShowForm(true) }}>GET A FREE ESTIMATE</button>
            </div>
            <Container style={{ paddingLeft: "20%", paddingRight: "20%", marginBottom: "25px" }}>
                <Row style={{ marginTop: "50px", textAlign: "center" }}>
                    <Col xs="12" s="12" md="5" style={{ alignSelf: "center" }}>
                        <b>We are a construction company, able to help with all of your needs</b>
                        <p></p>
                        <ul>
                            <li>Complete House Construction</li>
                            <li>Permit Acquisition</li>
                            <li>Ceiling Textures</li>
                            <li>Full House Painting</li>
                            <li>Renovation/Remodeling
                                <ul>
                                    <li>Kitchen</li>
                                    <li>Bathroom</li>
                                    <li>Basement</li>
                                    <li>Garage</li>
                                </ul>
                            </li>
                            <li>Door Replacements</li>
                            <li>Window Replacements</li>
                            <li>Exterior & Landscaping
                                <ul>
                                    <li>Roofing</li>
                                    <li>Siding</li>
                                    <li>Decks</li>
                                    <li>Concrete/Foundation
                                        <ul>
                                            <li>Sidewalks</li>
                                            <li>Stairs</li>
                                            <li>Driveways</li>
                                            <li>Backyards</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Residential & Commercial
                                <ul>
                                    <li>Framing</li>
                                    <li>Drywall</li>
                                    <li>Mudding</li>
                                    <li>Taping</li>
                                    <li>Accent Walls</li>
                                    <li>Epoxy Finishes</li>
                                </ul>
                            </li>
                            <li>Store and Venue Builds
                                <ul>
                                    <li>Retail</li>
                                    <li>Warehouses</li>
                                    <li>Halls or Wedding Halls</li>
                                </ul>
                            </li>
                            <li>And More...</li>
                        </ul>
                    </Col>
                    <Col xs="12" s="12" md="7" className='align-self-center'>
                        <img
                            src={homeInteriorImage}
                            alt='House Interior'
                            style={{
                                width: "100%"
                            }}
                        ></img>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginBottom: "50px" }}>
                <hr className='section-divider' />
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Gallery</h1>
                <Row>
                    <Col xs="9" sm="8" md="10">
                        <img
                            ref={imageRef}
                            src={selectedImage}
                            alt="selected"
                            onLoad={handleImageLoad}
                            style={{ width: '100%', maxHeight: '100vh' }}
                        />
                    </Col>
                    <Col xs="3" sm="4" md="2" style={{ overflowY: 'auto', maxHeight: imageHeight }}>
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
            <div style={{ textAlign: "center", backgroundColor: "#006fb9", color: "#c3f6ff", paddingLeft: '10px', paddingRight: '10px' }}>
                <h1 style={{ paddingTop: "35px" }}>Our Home Renovations Process</h1>
                <h5 style={{ paddingTop: "20px", marginBottom: "50px" }}>Trust us to streamline your process for worry free construction work. While we create your visions, going above and beyond</h5>
                <Container style={{ marginBottom: "50px" }}>
                    <Row>
                        <Col xs="12" md="3">
                            <h1>1</h1>
                            <b>Estimate/Quote</b>
                            <p></p>
                            <p>Either email or call us by pressing the estimate button below.</p>
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
                        <img src={kitchenImage} alt='Kitchen Renovation' style={{ width: "100%", marginBottom: "25px" }}></img>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Complete Renovations & Construction</h4>
                        <p>Every space holds potential, and our team is adept at unlocking it. Whether it's a dated living room, basement, bathroom, kitchen, flooring, door, window or a cramped office, we transform it into your dream space, ensuring it mirrors your unique taste and lifestyle.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Landscaping & Exterior</h4>
                        <p>From roofing, siding, decks, backyard, landscaping, pathways to lights. Everything to welcome a guest into your home comfortably</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={roofingImage} alt='Exterior Front Entrance' style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <img src={commercialBathroomImage} alt='Exterior Front Entrance' style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}></img>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Commerical Remodeling</h4>
                        <p>Commercial spaces aren't just about work. It's where ideas are born and visions realized. We transform commercial spaces, ensuring they reflect your business ethos while fostering creativity and productivity.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Residential Remodeling</h4>
                        <p>Embark on a journey of transformation with our Residential Remodeling services, where your vision for a perfect home is brought to life. Our expert team is committed to reinventing your living spaces with an emphasis on quality, modern functionality, and personalized style within your budget. Whether it's a cozy kitchen renovation or a comprehensive home makeover, we ensure a seamless blend of aesthetics and value, making your home a reflection of your dreams.</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={paintImage} alt='Residential Housing Renovation' style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <img src={exteriorRenoImage} alt='Residential Housing Renovation' style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}></img>
                    </Col>
                    <Col xs="12" md="6" className="left-align-text">
                        <h4>Concrete & Masonry</h4>
                        <p>Our concrete & masonry solutions lay the foundation for enduring beauty and functionality in your outdoor spaces. Specializing in driveways, sidewalks, pathways, and backyard patios, we deliver precision and durability to enhance your property's curb appeal and usability. Whether you're envisioning a sleek new driveway or a charming garden path, our expert craftsmanship ensures a flawless finish that withstands the test of time and elements, seamlessly integrating with your landscape to create the perfect outdoor setting.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6" className="right-align-text">
                        <h4>Pre & Post Construction</h4>
                        <p>Success lies in planning and support. We're with you every step of the way. We ensure smooth sailing.</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img src={constructionImage} alt="Construction Work In Progress" style={{ width: "100%", marginTop: "25px", marginBottom: "25px" }}></img>
                    </Col>
                </Row>
            </Container>
            <footer style={{ color: "beige", backgroundColor: "#006fb9", marginTop: "75px", paddingTop: "75px" }}>
                <Container>
                    <Row style={{ textAlign: "center" }}>
                        <h1>Divergent Smart Builds</h1>
                        <p>At Divergent Smart Builds, we craft structures that stand the test of time, merging innovative design with enduring quality. Specializing in both residential and commercial construction, we're committed to transforming your vision into a tangible legacy, one brick at a time.</p>
                        <div style={{ marginBottom: "75px" }}>
                            {/* <a href="https://www.instagram.com/yourcompanyhandle" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                                <img src="path-to-your-instagram-icon.png" alt="Instagram" style={{ height: "30px" }} />
                            </a>
                            <a href="https://www.facebook.com/yourcompanyhandle" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                                <img src="path-to-your-facebook-icon.png" alt="Facebook" style={{ height: "30px" }} />
                            </a> */}
                        </div>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Home;
