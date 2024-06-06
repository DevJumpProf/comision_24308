
const getNameFetch= (idPost) =>{
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then((res)=>{
  /*           console.log(res); */
        return res.json()
        })
        .then ((post)=>{
            fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)  
            .then((res)=>{
                /*           console.log(res); */
                    return res.json()
                    })
                    .then((user)=>{
                    document.write(`el post ${post.id} ${user.name} vive en ${user.address.street}`)
                    })
        })
    } catch (error) {
        console.log(error);
    }
}
getNameFetch(32)