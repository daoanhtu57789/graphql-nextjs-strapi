import gpl from "graphql-tag";
export const QUERY_AUTHOR = gpl`
query {
  authors {
    id
    email
    name
    password
    date
    phone
    address
    posts{
      id
      title
      email
      content
      createday
      updateday
      authors{
        id
        email
        name
        password
        date
        phone
        address
      }
    }
  }
}
  `;

export const QUERY_POSTS = gpl`
query {
  posts {
    id
      email
      content
      createday
      updateday
      title
    	authors{
        id
        email
    name
    password
    date
    phone
    address
      }
  }
}`;

export const createAuthor = gpl`
  mutation($email:String!,$password:String!,$name:String!,$date:String!,$address:String!,$phone:Long!) {
    createAuthor(input :{data:{email:$email,password:$password,name:$name,date:$date,address:$address,phone:$phone}}){
      author{
        email
        password
        name
        date
        address
        phone
      }    
    }
  }
  `;

export const createPost = gpl`
  mutation($email:String!,$content:String!,$createday:String!,$updateday:String!,$title:String!,$authors:ID!) {
    createPost(input :{data:{email:$email,content:$content,createday:$createday,updateday:$updateday,title:$title,authors:[$authors]}}){
      post{
        email
        content
        createday
        updateday
        title
        authors{
          id
          email
          name
          password
          date
          address
          phone
        }
    }  
    }
  }
  `;

export const deletePost = gpl`
  mutation($id:ID!) {
    deletePost(input: { where: { id: $id } }) {
      post{
        id
          email
          content
          createday
          updateday
          title
          authors{
            id
            email
        name
        password
        date
        phone
        address
          }
      }
    }
  }
`;

export const updatePost = gpl`
  mutation($id:ID!,$title:String!,$content:String!,$updateday:String!) {
    updatePost(input: {
      where: {
        id: $id
      },
      data: {
        title: $title ,
        content : $content
        updateday:$updateday
      }
    }) {
      post {
        title 
        content
        updateday
      }
    }
  }
`;
