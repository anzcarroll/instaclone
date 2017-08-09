import React, {Component} from 'react';
import styled from 'styled-components'

const CommentBox = styled.div`
display: flex;
justify-content: flex-wrap;
img{
 height: 30px;
    width: 30px;
    border-radius: 100%;
}
p{

}
`;

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentBox>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentBox>
    );
  }
}

export default Comment;