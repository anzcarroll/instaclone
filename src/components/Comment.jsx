import React, {Component} from 'react';
<<<<<<< HEAD
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
=======
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
`;

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
<<<<<<< HEAD
      <CommentBox>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentBox>
=======
      <CommentContainer>
        <img src={comment.profile_pic}/>
        <p><strong>{comment.username}</strong>   {comment.text}</p>
      </CommentContainer>
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
    );
  }
}

export default Comment;