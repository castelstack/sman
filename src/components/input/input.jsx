import React from "react";
import styled from "styled-components";
//import SearchIcon from "../../images/Search.png";
import SearchIcon from '@material-ui/icons/Search';

//import InputSearch from "../../components/input/input.components";

const Container = styled.div`
display: flex;
align-items: center;
margin-right: .7rem;
justify-self: ${(props) =>
  props.end ? "flex-end" : "none"};
  color: white;
  
`;

const Icon = styled(SearchIcon)`
transform: translateX(2rem);
margin-right: -3px;
color: white;
`;

const InputSearch =styled.input` 
background: rgba(0, 0, 0, 0.25);
padding: 15px 45px;

font-family: Antic Slab;
font-size: 16px;
line-height: 24px;

/* for box */
width: 320px;
height: 20px;
outline: 0;
color: white;
border-radius: 5px;
border: none;

&::placeholder {
  color: white;
  
}
&:hover {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
&:focus {
  
  
  
}
`;



const Search = ({onChange, placeholder, ...props}) => {
  return (
      <Container end='end' >
          <Icon />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      <InputSearch icon={SearchIcon} type='text' name='search' placeholder={placeholder} onChange={onChange}/>
         
    </Container>
  );
};

export default Search;
