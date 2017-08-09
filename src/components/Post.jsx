import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

<<<<<<< HEAD
const PostBox =styled.div`
background-color: #fff;
border-radius: 3px;
width: 90vw;
border: 1px solid grey;
padding: 80px;
margin: 20px auto;
max-width: 600px;
`;

const PostUser =styled.div`
display: flex;
justify-content: flex-start;
img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
}
`;

const PostNewStuff =styled.div`
margin: 0 auto;
`;
=======
const PostContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`;

const PostUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PostInfo = styled.div`
  padding: 5px 16px;
`;

const PostActions = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component{
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822


const PostIcons = styled.div`
 svg {
   padding: 5px;
 }
`;

class Post extends Component{
  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
<<<<<<< HEAD
      <PostBox>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </PostUser>
        <PostNewStuff>
=======
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
        </PostUser>
        <PostContent>
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
<<<<<<< HEAD
        </PostNewStuff>
        <PostIcons>
          <FaHeartO size={20}/>
          <FaCommentO size={20}/>
        </PostIcons>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostBox>
=======
          <PostActions>
            <FaHeartO size={35} />
            <FaCommentO size={35} />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostInfo>
      </PostContainer>
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
    )
  }
}

export default Post;