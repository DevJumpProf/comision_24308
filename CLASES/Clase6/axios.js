const getNameAxios = async (idPost)=>{
try {
    let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
  /*   console.log(resPost); */

  let resUsers = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
  document.write (`la persona que escribio el post n: ${resPost.data.id} es : ${resUsers.data.name}, y vive en ${resUsers.data.address.street}`)
    
} catch (error) {
    console.log(error);
}

}
getNameAxios(11)


/* https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/users


https://axios-http.com/es/docs/intro */