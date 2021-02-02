import React, { useState, useEffect } from "react";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
import axios from "axios";
import {
  Container,
  WriteIn,
  HeadBox,
  Heading,
  TextGist,
  TextTitle,
  Post,
  Select,
  Option,
  InputImg,
  Label,
} from "./write.style";

const WriteGist = ({ history }) => {
  const uploadDispatcher = FileHandler();

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  const gistDetails = {
    title: "The Gists With Images",

    description: "",

    image: "",
  };

  const [gistState, setGistState] = useState(gistDetails);

  // useEffect(() => {
  //   (async () => {
  //     await axios

  //       .post(`${URL}api/v1/gists/`, gistState, { withCredentials: true })

  //       .then((res, req) => {
  //         console.log(res.data);
  //       })

  //       .catch((err) => {
  //         // err msg
  //         console.log(err);

  //         alert(err.response.data.message);
  //       });
  //   })();
  // }, [gistState.image]);
   // api call with axios in useEffect hook
   useEffect(() => {
    
    const URL = "https://smanhq.herokuapp.com/";
    axios

    .post(`${URL}api/v1/gists/`, gistState, { withCredentials: true })

    .then((res, req) => {
      console.log(res.data);
    })

    .catch((err) => {
      // err msg
      console.log(err);

      alert(err.response.data.message);
    });
    
  }, [gistState]);

   

  const handleSubmit = async (e) => {
    e.preventDefault();

    uploadFile();

    setGistState((prev) => ({ ...prev, image: imageUrl }));
  };

  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>

      <form onSubmit={handleSubmit}>
        <WriteIn>
          <TextTitle>Pick a stingy title</TextTitle>
          <Select
            name="title"
            value={gistState.title}
            onChange={(e) =>
              setGistState({
                ...gistState,
                title: e.target.value,
              })
            }
          >
            <Option value="All">Choose stingy title</Option>
            <Option value="Urgent2k">Urgent2k</Option>
            <Option value="Valentine">Valentine</Option>
            <Option value="Transport">Transport</Option>
          </Select>

          <TextGist
            label="Write your rules"
            name="description"
            placeholder="Your Stingy Gist"
            onChange={(e) =>
              setGistState({
                ...gistState,
                description: e.target.value,
              })
            }
            value={gistState.description}
          />
        </WriteIn>

        <Label htmlFor="upload">
          <PhotoCamera />
          Add picture
        </Label>
        <InputImg
          type="file"
          accept="image/*"
          onChange={getInputFile}
          id="upload"
        />
        <img src={imageUrl} alt="upload" />

        <Post value="Post" type="submit" onSubmit={handleSubmit} />
      </form>
    </Container>
  );
};

export default WriteGist;
