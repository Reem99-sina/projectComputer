import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from 'react-bootstrap/Navbar'
import { Container, InputGroup } from 'react-bootstrap'
import imagelog from '../images/whole.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import style from 'react/style-prop-object'
export default function Nav() {
  let navigate = useNavigate()
  function checkNavigate() {
    navigate('/signup')
  }
  return (
    <>
      <Helmet><title>join groub</title></Helmet>
      <Navbar style={{ height: '72px', borderBottom: '1px solid black' }} id='specialCase'>
        <Container fluid className='d-flex justify-content-between '>
          <Navbar.Brand>
            <img
              src={imagelog}

              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <InputGroup.Text className='rounded-pill' style={{ width: '360px' }}><i className="fas fa-search fa-1x " ></i><span className='fs-6 mx-1'>Search for your favorite groups in ATG</span></InputGroup.Text>
          <p> create account <Link to='signup' className='text-decoration-none' onClick={checkNavigate()}>its free</Link></p>
        </Container>
      </Navbar>
      <div className='disaber p-4'>
        <button className='bg-dark border-0'>  <i className='fas fa-arrow-left text-white'></i></button>
        <button className='btn btn-outline-dark text-white'>join groub  </button>

      </div>
    </>
  )
}
