import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap';
import imageReivew1 from '../images/carreview.png'
import image from '../images/Ronal-Jones.png'
import image2 from '../images/Joseph-Gray.png'

export default function Reviewdifferent() {
    const [users] = useState([{
        title: '🗓️ Meetup',
        question: 'Finance & Investment Elite Social Mixer @Lujiazui',
        icon: 'Fri, 12 Oct, 2018',
        i1: 'fa-calendar',
        i2: 'fa-map-marker',
        icon2: 'Ahmedabad, India',
        img: imageReivew1,
        name: "Sarthak Kamra",
        cardImage: image,
        wordButton: 'Visit Website',
        buttonColor: '#E56135'
    }, {
        title: '💼️ Job',
        question: 'Software Developer',
        icon: 'Innovaccer Analytics Private Ltd.',
        icon2: 'Noida, India',
        i1: 'fa-shopping-bag',
        i2: 'fa-map-marker',
        img: '',
        name: "Sarah West",
        cardImage: image2,
        wordButton: 'Apply on Timesjobs',
        buttonColor: '#02B875'
    }])
    return users.map((user) => <Card id='card'>
        {user.img ? <Card.Img variant="top" src={user.img} className='style-card-img' /> : ''}
        <Card.Body style={{ width: '692px', height: '252px', textAlign: 'start' }}>
            <span className=''>{user.title}</span>
            <p className='my-3 fw-bold fs-4'>
                {user.question}
                <i className='fas fa-ellipsis position-absolute' style={{ right: '20px' }}></i>
            </p>
            <p style={{ color: 'GrayText', display: 'flex', justifyContent: 'space-around', fontSize: '15px', width: '330px' }} >
                <i className={`fas ${user.i1}`}></i><span className='text-lowercase'>{user.icon}</span><i className={`fas ${user.i2}`}></i><span className='text-lowercase'>{user.icon2}</span>
            </p>
            <button className='btn w-100' style={{ color: `${user.buttonColor}`, borderColor: `${user.buttonColor}` }}>{user.wordButton}</button>
            <Image roundedCircle src={user.cardImage} style={{ width: '48px', height: '48px' }}>
            </Image>
            <span className='fw-bold ms-2'>{user.name}</span>
            <div className='position-relation ' >
                <div style={{ right: '20px', position: 'absolute', bottom: '20px' }}>
                    <i className='fas fa-eye' ></i>
                    <span className='ms-3'>1.4k views</span>
                    <div className='btn ms-5' style={{ backgroundColor: '#EDEEF0' }} >
                        <i class="fa-solid fa-share-nodes"></i></div>
                </div>
            </div>
        </Card.Body>
    </Card >)



}