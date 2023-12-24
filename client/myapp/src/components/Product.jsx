import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {NavLink} from 'react-router-dom'


const Product = ({product}) => {
  const showMore=false
  return (
    <>
    <Card style={{ width: '320px',height:'500px' }} className='mt-5'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <NavLink style={{textDecoration:'none', color:'#515759'}} to={`/product/${product._id}`}>
        <Card.Title style={{fontSize:'20px'}}>{product.name}</Card.Title>
        <Card.Title >{product.price} RS/-</Card.Title>
        
        </NavLink>
        <Card.Text>
          {showMore? product.description:`${product.description.substring(0,25)}`}{"    "}
          <a style={{ color:'#89CBE9', fontSize:'5px'}}href='/productdetail'>....</a>
          {/* {product.description} */}
        </Card.Text>

      </Card.Body>
      
      <Button className='text-center'style={{ backgroundColor:'grey', border:'none' }}>Add to cart</Button>
     
    
    </Card>
    
    
    </>
  )
}

export default Product