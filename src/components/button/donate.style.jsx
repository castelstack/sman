import styled from 'styled-components'
export const ButtonDonate = styled.button` 
    display: grid;
    grid-template-columns: repeat(2,min-content);
    grid-gap:.3rem;
    align-items: cneter;
   
    font: 20px 'Nunito Sans', sans-serif;;
  
    background: #00684d;
    background: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,0.4) 100%),
                -webkit-linear-gradient(left, lighten(#00684d, 15%) 0%, #00684d 50%, lighten(#00684d, 15%) 100%);
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%),
                linear-gradient(to right, lighten(#00684d, 15%) 0%, #00684d 50%, lighten(#00684d, 15%) 100%);
    background-position: 0 0;
    background-size: 200% 100%;
    border-radius: 4px;
    color: #fff;
    padding: 15px 15px 15px 15px;
    text-shadow: 1px 1px 5px #666;
    -webkit-transition: all 800ms;
    transition: all infinite ease-out;
    animation: pulse 1s infinite;
  
    
    &:hover {
    
        box-shadow: 5px 8px 9px -10px rgba(0, 0, 0, 0.4);
       
    
      
     
      }
    
    
  
  
  @keyframes pulse {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-.2rem);
    }
    50% {
      transform: translateY(.2rem);
    }
    75% {
      transform: translateY(-.2rem);
    }
     100% {
      transform: translateY(.2rem);
    }
  }`