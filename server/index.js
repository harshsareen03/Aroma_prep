import dotenv from 'dotenv'
import  express  from "express";
import products from './data/products.js';
import cors from 'cors'
import connectDB from "./config/db.js";
import Product from '../server/models/productModel.js'

dotenv.config()

connectDB()
const app=express()
const port=5000
app.use(cors())


app.get('/',(req,res) =>{
    res.send('hello')
})


app.get('/products', async(req, res) => {
  const products=await Product.find({})
  res.json(products)
});

app.get('/products/:id', async(req, res) => {
   const product=await Product.findById((req.params.id))
   if (product){
    return res.json(product)
   }
   res.json(product)
  });


// app.get('/products/:id',(req,res)=>{
//   res.json()
// })


app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})