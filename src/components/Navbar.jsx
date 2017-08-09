import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

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
  width: 25%;
  display: flex;
  justify-content: space-around;
`;


const SearchBar =styled.input`
  height: 30px;
  width: 190px;
`;

class Navbar extends Component{
  render(){
    return (
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
    );
  }
}

export default Navbar