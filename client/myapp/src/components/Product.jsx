import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink} from 'react-router-dom'


const Product = ({product}) => {
  const showMore=false
  return (
    <>
    <Card style={{ width: '18rem', height:'30rem'}} className='mt-5'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <NavLink style={{textDecoration:'none', color:'black'}} to={`/product/${product._id}`}>
        <Card.Title>{product.name}</Card.Title>
        </NavLink>
        <Card.Text>
          {showMore? product.description:`${product.description.substring(0,80)}`}{"    "}
          <a style={{textDecoration:'none', color:'#89CBE9'}}href='/productdetail'>....</a>
          {/* {product.description} */}
        </Card.Text>
      </Card.Body>
      <Button className='text-center'style={{ backgroundColor:'grey', border:'none' }}>Add to cart</Button>
     
    
    </Card>
    
    
    </>
  )
}

export default Product