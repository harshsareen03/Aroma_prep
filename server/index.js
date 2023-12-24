import  express  from "express";
import products from './data/products.js';
import cors from 'cors'
const app=express()
const port=5000
app.use(cors())
app.get('/',(req,res) =>{
    res.send('hello')

})

app.get('/products', (req, res) => {
    res.json(products);
  });

app.get('/products/:id', (req, res) => {
   const product=products.find((p)=>p._id===req.params.id)
   res.json(product)
  });

app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})