import React from 'react'
import { Dropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Reviewdifferent from './Reviewdifferent'
import ReviewList from './ReviewList'

export default function Review() {
    return (
        <>  <div className='justify-content-around align-items-center  w-1040 mx-auto' style={{ height: '88px' }} id='disablie' >
            <Nav className='me-auto '>
                <Nav.Item as="li">
                    <Nav.Link href="/home" className='fs-6 p-2 text-dark'>All Posts(32)</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" className='fs-6 p-2 text-muted'>Article</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className='fs-6 p-2 text-muted'>Event</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className='fs-6 p-2 text-muted'>Education</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className='fs-6 p-2 text-muted'>Job</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Dropdown.Toggle id="dropdown-basic">
                    Write Post
                </Dropdown.Toggle>
                <Dropdown.Toggle id='dropdown-primary' variant="primary"  >
                    <i className='fas fa-users'></i> Join Group
                </Dropdown.Toggle>
            </div>
        </div>
            <div className='stale-responce p-3'>
                <Nav.Item >
                    <Nav.Link className='fs-6 p-2 text-dark'>All Posts(32)</Nav.Link>
                </Nav.Item>
                <Dropdown.Toggle id="dropdown-basic">
                    Filter: All
                </Dropdown.Toggle>
            </div>
            <ReviewList />
            <Reviewdifferent />

        </>
    )
}
