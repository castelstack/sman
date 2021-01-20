import React from "react";
import GistsPost from "../../components/gist-card/gists-post";
import { PostBox } from "../../constant/styles";
import Network from "../../images/done.png";

const Urgent2k = () => {
  const data = {
    rules: [
      {
        id: 1,
        tag: "Urgent 2k",
        gistspost:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdietlorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdietlorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdietsed do lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: `${Network}`,
        name: 'joshua peter'
      },
      {
        id: 2,
        tag: "Transport",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
      },
      {
        id: 3,
        tag: "Gift",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
        image: `${Network}`,
        name: 'joshua peter'
      },
      {
        id: 4,
        tag: "Urgent 2k",
        gistspost:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          name: 'joshua peter'
      },
      {
        id: 5,
        tag: "Transport",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'joshua peter'
      },
      {
        id: 6,
        tag: "Gift",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'joshua peter'
      },
    ],
  };

  return (
    <div>
      <PostBox>
        {data.rules.map((item) => (
          <div key={item.id}>
            <GistsPost
              tag={item.tag}
              gistspost={item.gistspost}
              image={item.image}
              name={item.name}
            />
          </div>
        ))}
      </PostBox>
    </div>
  );
};

export default Urgent2k;
