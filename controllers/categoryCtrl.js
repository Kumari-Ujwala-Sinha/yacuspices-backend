const Category = require('../models/categoryModel')

const categoryCtrl ={
    getCategories: async(req, res) => {
        try{
            const categories = await Category.find()
            res.json(categories)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createCategory: async(req, res)=>{
        try{
            const {category_id, name} = req.body
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg:"This category already exists."})
            const newCategory = new Category({category_id,name})
            await newCategory.save()
            res.json({msg:"created a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteCategory:async(req, res) =>{
        try{
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"deleted a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateCategory:async(req, res) =>{
        try{
            const {name,category_id}=req.body
            await Category.findOneAndUpdate({_id:req.params.id},{name,category_id})
            res.json({msg:"Updated a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = categoryCtrl