import React, { useState, useEffect } from "react";
import { HeadText, SmText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
// import { useFormik } from "formik";
import axios from "axios";
import { useAlert } from "react-alert";

const Container = styled.div`
  margin: 20px 110px;
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (max-width: 800px) {
    margin: 20px 80px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px 60px;
  }

  @media only screen and (max-width: 400px) {
    margin: 10px 20px;
  }
`;

const WriteIn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin-bottom: 10px;
`;

const HeadBox = styled.div`
  display: flex;

  align-items: center;
  padding: 50px 0;

  @media only screen and (max-width: 600px) {
    padding: 15px 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 0;
  }
`;

const Heading = styled(HeadText)`
  font-size: 45px;
  line-height: 61px;

  color: #c4c4c4;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const TextGist = styled.textarea`
  resize: none;
  outline: none;
  width: 95%;
  height: 120px;
  border: 3px solid #cccccc;
  padding: 5px;
`;
const TextTitle = styled(SmText)`
  color: #c4c4c4;
  font-size: 15px;
`;
const Post = styled(Button)`
  margin: 30px 0;
  align-self: flex-end;
`;

const Select = styled.select`
  background: #fff;
  border: solid 1px #843035;
  border-radius: 5px;
  width: 50%;
  padding: 0.5rem;
  font-size: 18px;
  font-family: "Acme", sans-serif;
  color: #843035;
  margin-bottom: 90px;

  @media (min-width: 1200px) {
    width: 70%;
    margin-bottom: 20px;
  }

  @media (min-width: 800px) {
    width: 50%;
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    width: 30%;
  }
`;
const Option = styled.option`
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  font-family: "Acme", sans-serif;
  background: #b0c4de;
  color: rgba(0, 0, 0, 0.88);

  &:hover,
  &:focus {
    color: #546c84;
    background-color: #fbfbfb;
  }
`;
const InputImg = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
`;
const Label = styled.label`
  width: max-content;
  color: white;
  background: #00008b;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  outline: none; ;
`;
// create new gist
const WriteGist = ({ history }) => {
  // const alert = useAlert();
  const uploadDispatcher = FileHandler();

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  const gistDetails = {
    title: "iiiiiii",
    description: "",
    image: "",
  };

  const [gistState, setGistState] = useState(gistDetails);

  useEffect(() => {
    (async () => {
      await axios
        .post(`${URL}api/v1/gists/`, gistState, { withCredentials: true })

        .then((res, req) => {
          console.log(res.data);
        })

        .catch((err) => {
          // err msg
          console.log(err);
        });
    })();
  }, [gistState.image]);

  const URL = "https://smanhq.herokuapp.com/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    uploadFile();

    setGistState((prev) => ({ ...prev, image: imageUrl }));

    console.log(imageUrl);
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
              setGistState((prev) => ({ ...prev, title: e.target.value }))
            }
          >
            <Option value="Urgent2k">Urgent2k</Option>
            <Option value="Valentine">Valentine</Option>
            <Option value="Transport">Transport</Option>
          </Select>

          <TextGist
            label="Write your gist"
            name="description"
            placeholder="Your Stingy Gist"
            onChange={(e) =>
              setGistState((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            value={gistState.description}
          />
        </WriteIn>
        <div>
          <Label htmlFor="upload">
            <PhotoCamera />
            Add picture
          </Label>
          <InputImg type="file" onChange={getInputFile} id="upload" />
        </div>
        <Post value="Post" type="submit" onSubmit={handleSubmit} />
      </form>
      <div></div>
    </Container>
  );
};

export default WriteGist;
