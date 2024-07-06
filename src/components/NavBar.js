import { React } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { dropInAnimation} from '../animations/dropInAnimation';

function NavBar() {
    return (
        <motion.div className="full-width" initial="hidden" animate="visible" variants={dropInAnimation(1.5, '-100%', 0)}>
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
        </motion.div>
       
    )
}

export default NavBar;