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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: `${Network}`
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
      },
      {
        id: 4,
        tag: "Urgent 2k",
        gistspost:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      },
      {
        id: 5,
        tag: "Transport",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
      },
      {
        id: 6,
        tag: "Gift",
        gistspost:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
      },
    ],
  };

  return (
    <div>
      <PostBox>
        {data.rules.map((item) => (
          <div key={item.id}>
            <GistsPost tag={item.tag} gistspost={item.gistspost} image={item.image}/>
          </div>
        ))}
      </PostBox>
    </div>
  );
};

export default Urgent2k;
