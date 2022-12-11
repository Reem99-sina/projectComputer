import React from 'react'
import { Card } from 'react-bootstrap'
// import image from '../images/radek-grzybowski-66457-unsplash.jpg'
export default function Home() {
    return (<>
        <Card className="bg-dark text-white overflow-hidden home" style={{ height: '440px' }}>
            <Card.ImgOverlay>
                <Card.Title>Computer Engineering</Card.Title>
                <Card.Text>
                    142,765 Computer Engineers follow this
                </Card.Text>

            </Card.ImgOverlay>
        </Card>
    </>
    )
}
