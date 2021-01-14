import styled from "styled-components";
import {  MedText } from '../../constant/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../../components/button/button'


export const ContiuneButton = styled(Button)`
justify-self: flex-end;`
export const Container = styled.div`
  margin: 0 99px;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
`;

export const Form = styled.div`
  background: #843035;
  padding: 101px;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-gap: 30px;
`;

export const Text = styled(MedText)`
  color: white;
  font-size: 36px;
  
`;

export const Box = styled.div`
display: flex;
align-items: center;
margin-right: .7rem;
justify-self: ${(props) =>
  props.end ? "flex-end" : "none"};
  color: white;
  
`;

export const Icon = styled(SearchIcon)`
transform: translateX(2rem);
margin-right: -3px;
color: white;
`;

export const InputFied =styled.input` 
background: #843035;
padding: 15px 45px;


font-size: 16px;
line-height: 24px;

/* for box */
width: 100%;
height: 20px;
outline: 0;
color: white;
border-radius: 5px;
border: none;
border: solid 2px white;

&::placeholder {
  color: white;
  
}
&:hover {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
&:focus {
  
  
  
}
`;