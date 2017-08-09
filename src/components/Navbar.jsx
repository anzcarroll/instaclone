import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

<<<<<<< HEAD
const NavStyles =styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
  background-color: #F0F8FF;

  h3{
    font-size: 2em;
    font-family: 
  }
`;
const IconsContainer= styled.div`
=======
const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);

  p{
    font-size: 1.75rem;
    font-family: 'Oleo Script', cursive;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }
  }
`

const SearchContainer = styled.div`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  width: 25%;
  padding: 7px;
  border-radius: 3px;
  color: #999;
  svg{
    margin-bottom: 5px;
  }
  input{
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`;

const IconsContainer = styled.div`
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
  width: 25%;
  display: flex;
  justify-content: space-around;
`;
<<<<<<< HEAD


const SearchBar =styled.input`
  height: 30px;
  width: 190px;
`;
=======
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822

class Navbar extends Component{
  render(){
    return (
<<<<<<< HEAD
      <NavStyles>
        <IconsContainer>
            <h3><FaInstagram /> | Instaclone</h3>
        </IconsContainer><IconsContainer>
            <FaSearch/>
        </IconsContainer>
            <SearchBar type="text" placeholder="Search"/>
        <IconsContainer >
          <FaCompass size={28}/>
          <FaHeartO size={28}/>
          <FaUser size={28} />
        </IconsContainer>
      </NavStyles>
=======
      <Nav>
        <p><FaInstagram /> | Instaclone</p>
        <SearchContainer>
          <FaSearch/><input type="text" placeholder="Search"/>
        </SearchContainer>
        <IconsContainer>
          <FaCompass size={28} />
          <FaHeartO size={28} />
          <FaUser size={28} />
        </IconsContainer>
      </Nav>
>>>>>>> 94d6cc40351d8ac3a8ccaef90f92879be5193822
    );
  }
}

export default Navbar