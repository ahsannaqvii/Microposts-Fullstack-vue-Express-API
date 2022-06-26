import axios from "axios";

// const url ="http://localhost:5000/api/posts/"; 
//FOR HEROKU
const url="api/posts/"

class PostService {

    //get Posts
    static getPosts(){
        return new Promise( function (resolve,reject){
                axios.get(url).then( (response) =>{
                    const data=response.data
                    resolve( //If what we did was succesful tou call resolve.
                    data.map(post=>({
                        ...post ,
                         createdAt :new Date(post.createdAt)
                    }
                    ))
                );
                }).catch((err)=>{
                console.log("heelo")
                    reject(err);
            })
        })
    }

    //Delete posts
    static DeletePost(id){
        return axios.delete(`${url}${id}`)
    }
    // //Create Post 

    static InsertPost(text){
        return axios.post(url,{
            text:text,
        })
    }
}export default PostService;