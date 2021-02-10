import styled from "styled-components";
export const ButtonDonate = styled.a`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 0.3rem;
  align-items: cneter;
  text-decoration: none;
  font: 20px "Nunito Sans", sans-serif;

  background: navy;
  border: none;
  border-radius: 4px; 
  color: #fff;
  padding: 10px 15px 10px 15px;
  text-shadow: 1px 1px 5px #666;
  -webkit-transition: all 800ms;
  transition: all infinite ease-out;
  animation: pulse 3s infinite;

  position: fixed;
  bottom: 10%;
  right: 0;
  z-index: 2000;

  @media only screen and (max-width: 600px) {
    bottom: 0;
    padding: 3px 5px 3px 5px;
    animation: none;
    font: 15px "Nunito Sans", sans-serif;
  }
  &:hover {
    animation: none;
  }

  @keyframes pulse {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-0.2rem);
    }
    50% {
      transform: translateY(0.2rem);
    }
    75% {
      transform: translateY(-0.2rem);
    }
    100% {
      transform: translateY(0.2rem);
    }
  }
`;
