import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Reviewdifferent from './Reviewdifferent'
import ReviewList from './ReviewList'
import imagesignup from '../images/Group 3.png'
export default function Signin() {
    let navigate = useNavigate()
    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    function getForm(ele) {
        let myUser = { ...user }
        myUser[ele.target.name] = ele.target.value
        setUser(myUser)
    }
    function submitaccount() {
        localStorage.setItem('usercreate', user)
    }

    return (<>
        <Nav />
        <ReviewList />
        <Reviewdifferent />
        <div className='overlay'>
            <button  style={{
                position: "absolute", top: "3%", left: "82%", backgroundColor: '#EDEEF0', width: '20px', display: "flex", justifyContent: "center", alignItems: "center"
                , padding: "3px", border: '0px'
            }} className='rounded-circle'><i class="fa-solid fa-xmark"></i></button>
            <div className='inter'>
                <div className='header'>
                    <p className='text-center py-3'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className='d-flex px-4'>
                    <div className='' style={{ width: '320px' }}>
                        <h3>Sign In</h3>
                        <form >
                            <input type="email" class="form-control" placeholder="email" name='email' onChange={(e) => getForm(e)} />
                            <input type="password" class="form-control" placeholder="password" name='password' onChange={(e) => getForm(e)} />
                            <button className='btn btn-primary rounded-pill mt-3 w-100' onClick={submitaccount()}>Sign In</button>
                            <button className='btn btn-outline-dark my-3 w-100 fs-6'><i class="fa-brands fa-facebook me-2" style={{ color: 'blue' }}></i>Sign in with Facebook</button>
                            <button className='btn btn-outline-dark mb-3 w-100 fs-6'> <i class="fa-brands fa-google" style={{ color: 'red' }}></i>Sign in with Google</button>
                            <p> Forgot Password?</p>

                        </form>
                    </div>
                    <div style={{ fontSize: '14px', textAlign: 'end' }}>
                        <p>Don’t have an account yet? <Link to='signup'>Create new for free!</Link></p>
                        <img src={imagesignup} style={{ width: '320px', height: '320px' }} />
                    </div></div>
            </div>
        </div>

    </>
    )
}

