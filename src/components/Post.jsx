import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

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


const PostIcons = styled.div`
 svg {
   padding: 5px;
 }
`;

class Post extends Component{
  render(){
    const { post } = this.props;
    return(
      <PostBox>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </PostUser>
        <PostNewStuff>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </PostNewStuff>
        <PostIcons>
          <FaHeartO size={20}/>
          <FaCommentO size={20}/>
        </PostIcons>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostBox>
    )
  }
}

export default Post;