import React, { useEffect,useState } from 'react'
import Product from '../Product'
// import product from '../../products.js'
import { Col,Row,Container } from 'react-bootstrap'
import axios from 'axios'
const Home = () => {
  const [products,setProducts]=useState([])

 useEffect(()=>{
  const fetchProducts= async () =>{
    const {data}  = await axios.get('http://localhost:5000/products')
    setProducts(data)
  }
  fetchProducts()
 },[])
 console.log(products)
  return (
    <>
    <Container>

    <Row>
      {/* {products.map((p)=>{
        <Col key={p._id}>
        <Product product={p}/>
        </Col>
      })} */}


    {products.map((pro)=>(
      <Col key={pro._id} sm={12} md={6} lg={4} xl={4}>
        <Product product={pro}/>
      </Col>

    )
      
    )}
    </Row>
    </Container>


    
    </>
  )
}

export default Home