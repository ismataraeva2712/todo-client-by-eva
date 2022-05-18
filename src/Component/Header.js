import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/home' className="text-white text-decoration-none mt-1 fw-bold mx-5">TO DO APP</Link>


                            {
                                user ? <button onClick={handleLogout} className='btn-primary fw-bold'>Log out</button> :
                                    <Link className="text-white text-decoration-none mt-1 fw-bold mx-5" to="/login">Login</Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;