const Collections = require('../models/collectionModel')



const collectionCtrl ={
    getCollections: async(req, res) => {
        try{
            const collections = await Collections.find()
            res.json(collections)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createCollection: async(req, res)=>{
        try{
            const {collection_id, name,image_url,category,description} = req.body
            const collection = await Collections.findOne({name})
            if(collection) return res.status(400).json({msg:"This collection already exists."})
            const newCollections = new Collections({collection_id, name,image_url,category,description })
            await newCollections.save()
            res.json({msg:"created a collection"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteCollection:async(req, res) =>{
        try{
            await Collections.findByIdAndDelete(req.params.id)
            res.json({msg:"deleted a collection"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateCollection:async(req, res) =>{
        try{
            const {collection_id, name,image_url,category, description}=req.body
            await Collections.findOneAndUpdate({_id:req.params.id},{collection_id, name,image_url,category, description},{
                new: true
              })
            res.json({msg:"Updated a collection"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = collectionCtrl