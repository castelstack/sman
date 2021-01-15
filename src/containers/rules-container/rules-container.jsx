import React from 'react';
import RulesBox from '../box/rules-box';
import Rule from '../../components/rule/rule';
import styled from "styled-components";




const AllRules= styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  justify-content: space-between;
  margin: 160px 99px;
`;


const RulesContainer = () => {

    const data = {
        rules: [
          {
            id: 1,
            title: "Urgent 2k",
            rule:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
            
          },
          {
            id: 2,
            title: "Transport",
            rule:
              "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
            
          },
          {
            id: 3,
            title: "Gift",
            rule:
              "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
            
          },
          {
            id: 4,
            title: "Urgent 2k",
            rule:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
            
          },
          {
            id: 5,
            title: "Transport",
            rule:
              "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
            
          },
          {
            id: 6,
            title: "Gift",
            rule:
              "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
            
          }
        ],
      }
  
    
    return (
        <div>
            <RulesBox />
            <AllRules>
                {
                    data.rules.map(item => <div key={item.id}>
                        <Rule number={item.id} rule={item.rule}/>
                    </div>)
                }
            </AllRules>
        </div>
    );
};

export default RulesContainer;