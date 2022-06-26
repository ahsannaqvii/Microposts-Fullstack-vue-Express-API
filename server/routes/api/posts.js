
const express=require('express')
const mongoDB=require('mongodb')

const router=express.Router()


//GET POSTS.

router.get('/' , async (req,res)=>{ // '/' is not home but it is /api/posts
    const posts=await loadPostsCollection();
    
    res.send(await posts.find({}).toArray()); //find everything 
})

//ADD POST --- POST REQUEST ( TO INSERT DATA TO DB JO VUEJS SE AYEGA)
router.post('/',async(req,res)=>{
    const posts=await loadPostsCollection();
    await posts.insertOne({
        text:req.body.text,
        createdAt:new Date()
    });
    res.status(201).send(); 
})

//DELETE POSTS.
router.delete('/:id' , async(req,res)=>{
    const posts=await loadPostsCollection()
    await posts.deleteOne({_id: new mongoDB.ObjectId(req.params.id)})
    res.status(200).send(); 
 
})

async function loadPostsCollection(){
    const client=await mongoDB.MongoClient.connect('mongodb+srv://syedahsan127:42621211@mevn-stack.zic4ass.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true})
    return client.db('MEVN-Stack').collection('posts');
}

module.exports = router;