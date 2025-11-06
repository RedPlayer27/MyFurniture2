import React from 'react'
import bn1 from '../../images91/bn1.jpg'
import bn2 from '../../images91/bn2.jpg'
import "./Banner1.css"
import { Container, Row } from 'react-bootstrap'

function Banner1() {
    return (
        <Container>
            <Row>
                <div className='ben'>
                    <div className='bot1'>
                        <img src={bn1}></img>
                        <div className='tx1'>
                            <h3>Sale Furniture For Summer</h3>  
                            <p>Great Discounts Here</p>
                        </div>
                    </div>                
                    <div className='bot2'>
                        <img src={bn2}></img>
                        <div className='tx2'>
                            <h3>Office Chair For Best Offer</h3>
                            <p>Great Discounts here</p>
                        </div>
                    </div>  
                </div>
            </Row>
            <section>
                <div className='flot1'>
                    <h2>Latest News</h2>
                    <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                        eiusmo tempor incididunt ut labore</p>
                </div>
            </section>
        </Container>
    )
}

export default Banner1
