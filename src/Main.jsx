import React, { useContext } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import { Samplecontext } from './App';

const Main = () => {
  const example = useContext(Samplecontext);
  const { nav } = example
  return (
    <div  >
      {nav === true ? <Navbar
        expand="lg"
        className=" navbar"
      >
        <Container >
          <Navbar.Brand>
            <div className='head '>
              Movie App<BiSolidCameraMovie className='ms-2' />
            </div>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <div>
              <Link className='title me-3' to={"Popular"} >Popular movies</Link>
              <Link className='title me-3' to={"Latest"} >Latest movies </Link>
              <Link className='title' to={"Comedy"} >Comedy movies</Link>
            </div>
          </Nav>
        </Container>
      </Navbar> : ""}
    </div>
  )
}
export default Main
