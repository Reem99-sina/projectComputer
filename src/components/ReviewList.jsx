import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import image from '../images/review-list1.png'
import Image from 'react-bootstrap/Image'
import imageReivew1 from '../images/review1.png'
import imageReivew2 from '../images/reviewlist2.png'
import image2 from '../images/review-list3.png'
export default function ReviewList() {
    const [users] = useState([{
        title: '✍️ Article',
        question: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        img: imageReivew1,
        name: "Sarthak Kamra",
        cardImage: image
    }, {
        title: '🔬️ Education',
        question: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        img: imageReivew2,
        name: "Sarah West",
        cardImage: image2
    }])

    return users.map((user) => {
        return <Card  id='card'>
            <Card.Img variant="top" src={user.cardImage} className='style-card-img' />
            <Card.Body style={{ width: '692px', height: '252px', textAlign: 'start' }}>
                <span>{user.title}</span>
                <p className='my-3 fw-bold fs-4'>
                    {user.question}
                    <i className='fas fa-ellipsis position-absolute' style={{ right: '20px' }}></i>
                </p>
                <p style={{ fontSize: '19px', color: 'GrayText', marginBottom: '10px' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <Image roundedCircle src={user.img} style={{ width: '48px', height: '48px' }}>
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
        </Card>
    })
}
