import {React} from 'react';
import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Zoom, Fade, MoveOut, StickyIn, FadeIn, ZoomIn} from 'react-scroll-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import Introduction from '../components/Introduction';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Main() {
    return (
        <ScrollContainer>
            <ScrollPage>
                <Navbar expand="lg" className="bg-body-tertiary justify-content-between" data-bs-theme="dark">
                    <Container className="nav-container mx-auto justify-content-center">
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link>Introduction</Nav.Link>
                                    <Nav.Link>Technical Skills</Nav.Link>
                                    <Nav.Link>Projects</Nav.Link>
                                    <Nav.Link>Working Exp</Nav.Link>
                                    <Nav.Link>Education</Nav.Link>
                                    <Nav.Link>Personal Info</Nav.Link>
                                    <Nav.Link>Resume</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>

                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))} className="full-width">
                    <Introduction />
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <Card>
                        <Card.Body>
                            <h2>Card is a card</h2>
                        </Card.Body>
                    </Card>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <Card>
                        <Card.Body>
                            <h2>Card is a card</h2>
                        </Card.Body>
                    </Card>
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default Main;