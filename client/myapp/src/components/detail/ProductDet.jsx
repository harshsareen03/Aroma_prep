import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Image, ListGroup,Button } from "react-bootstrap";
// import products from "../../products";
import axios from 'axios'
const ProductDet = () => {
  const { id: productId } = useParams();

 
  const [product, setProduct] = useState({});
  // const product = products.find((p) => p._id === productId);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products/${productId}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);


  console.log(product);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Image src={product.image} />
          </Col>
          <Col>
            <h1 style={{ color: "grey", fontFamily: "impact" }}>
              {product.name}
            </h1>
            <ListGroup.Item>
              <h3 style={{ color: "grey", fontFamily: "impact" }}>
                <span style={{ color: "#95B8C8" }}>Price :</span>{" "}
                {product.price} RS/-
              </h3>
              <p>{product.description}</p>
              <p>category: {product.category}</p>
              <p>brand: {product.brand}</p>
              <Button className='text-center'style={{ backgroundColor:'grey', border:'none' }}>Add to cart</Button>
            </ListGroup.Item>
          </Col>
          <Container>
            
          <Row>
            
            <h3 className="text-center mt-5"style={{ color: "grey", fontFamily: "impact" }}>TRENDING NOW</h3>
            

          <Col sm>
            <Image
              src={product.imageone}
              style={{ width: "200px", height:'300px'}}
              thumbnail
            />
          </Col>
          <Col sm>
            <Image
              src={product.imagetwo}
              style={{ width: "200px", height:'300px'}}
              thumbnail
            />
          </Col>
          <Col sm>
            <Image
              src={product.imagethree}
              style={{ width: "200px",height:'300px' }}
              thumbnail
            />
          </Col>
          </Row>
          </Container>
          {/* <Col xs={6} md={4}>
          <Image src={product.imagethree} style={{width:'200px'}}thumbnail />
        </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default ProductDet;
