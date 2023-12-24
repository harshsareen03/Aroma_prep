import React from 'react'
import Product from '../Product'
import product from '../../products.js'
import { Col,Row,Container } from 'react-bootstrap'
const Home = () => {
  return (
    <>
    <Container>

    <Row>


    {product.map((products)=>(
      <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={products}/>
      </Col>

    )
      
    )}
    </Row>
    </Container>


    
    </>
  )
}

export default Home