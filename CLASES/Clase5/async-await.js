let getNameAsync = async (idPost) => {
  try {
    let resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    /*  console.log(resPost); */
    let post = await resPost.json();

    let resUsers = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    let user = await resUsers.json();
    /* document.write (`el post ${idPost} dice ${post.body} lo escribió ${user.name}`) */
    document.write(
      `el post ${idPost} lo escribió ${user.name} que vive en:${user.address.street} `
    );
  } catch (error) {
    console.log(error);
  }
};
getNameAsync(32);

/* 
https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/users */
