const Products = require('../models/productModel')

const productCtrl ={
    getProducts: async(req, res) => {
        try{  
            const products = await Products.find()
            res.json(products)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createProduct: async(req, res)=>{
        try{
            
            const {product_id, title, price, category,image_url, description, content, checked, sold} = req.body
            const products = await Products.findOne({title})
            if(products) return res.status(400).json({msg:"This Products already exists."})
            const newProduct = new Products({product_id, title, price, category,image_url, description, content, checked, sold})
            await newProduct.save()
            res.json({msg:"created a Product"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteProduct:async(req, res) =>{
        try{
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg:"deleted a Products"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateProduct:async(req, res) =>{
        try{
            const {product_id, title, price, category,image_url, description, content, checked, sold}=req.body
            await Products.findOneAndUpdate({_id:req.params.id},{product_id, title, price, category,image_url, description, content, checked, sold}, {
                new: true
              })
            res.json({msg:"Updated a Products"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl