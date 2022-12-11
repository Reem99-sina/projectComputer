import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Reviewdifferent from './Reviewdifferent'
import ReviewList from './ReviewList'
import imagesignup from '../images/Group 3.png'
export default function Signup() {
    let overlay = document.querySelector(".overlay");
    let navigate = useNavigate()
    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    function closeOverlay() {
        if (overlay.style.visible === 'hidden') {
            overlay.style.visibility = 'visible'
        } else {
            overlay.style.visibility = 'hidden'
        }
        navigate('/signup')
    }
    function getForm(ele) {
        let myUser = { ...user }
        myUser[ele.target.name] = ele.target.value
        setUser(myUser)
    }
    function submitaccount() {
        localStorage.setItem('usercreate', (user))
    }
    function gotosignin() {
        navigate("/signin")
    }
    return (<>
        {/* {overlay.style.visibility === 'hidden' ? overlay.style.visibility === 'visible' : overlay.style.visibility === 'hidden'} */}
        <Nav />
        <ReviewList />
        <Reviewdifferent />
        <div className='overlay'>
            <button style={{
                position: "absolute", top: "3%", left: "82%", backgroundColor: '#EDEEF0', width: '20px', display: "flex", justifyContent: "center", alignItems: "center"
                , padding: "3px", border: '0px'
            }} className='rounded-circle' ><i class="fa-solid fa-xmark"></i></button>
            <div className='inter'>
                <div className='header'>
                    <p className='text-center py-3'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className='d-flex px-4'>
                    <div className='' style={{ width: '320px' }}>
                        <h3>Create Account</h3>
                        <form >
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="First Name" name='firstName' onChange={(e) => getForm(e)} />
                                <input type="text" class="form-control" placeholder="Last Name" name='lastName' onChange={(e) => getForm(e)} /></div>
                            <input type="email" class="form-control" placeholder="email" name='email' onChange={(e) => getForm(e)} />
                            <input type="password" class="form-control" placeholder="password" name='password' onChange={(e) => getForm(e)} />
                            <input type="password" class="form-control" placeholder="Confirm Password" name='confirmPassword' onChange={(e) => getForm(e)} />
                            {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}
                            <button className='btn btn-primary rounded-pill mt-3 w-100' onSubmit={submitaccount()}>Create Account</button>
                            <button className='btn btn-outline-dark my-3 w-100 fs-6'><i class="fa-brands fa-facebook me-2" style={{ color: 'blue' }}></i>Sign up with Facebook</button>

                            <button className='btn btn-outline-dark mb-3 w-100 fs-6'> <i class="fa-brands fa-google" style={{ color: 'red' }}></i>Sign up with Google</button>
                        </form>
                    </div>
                    <div style={{ fontSize: '14px', textAlign: 'end' }}>
                        <p>Already have an account? <Link  onClick={gotosignin()}>Sign In</Link></p>
                        <img src={imagesignup} style={{ width: '320px', height: '320px' }} />
                        <p >By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div></div>
            </div>
        </div>

    </>
    )
}
