import React, { useEffect, useState } from "react";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
import message from "../../constant/response";
import { useFormik } from "formik";
import axios from "axios";
import { useAlert } from "react-alert";
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
  Img,
} from "./write.style";

import { Box, InputField } from "../join/join.style";

const WriteGist = ({ history }) => {
  const uploadDispatcher = FileHandler();

  const alert = useAlert();

  const [tagState, setTagState] = useState([]);

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  const handleClick = (e) => {
    e.preventDefault();
    uploadFile();
    alert.show("pic added now post");
    uploadFile();
    console.log(imageUrl);
  };

  const URL = "https://smanhq.herokuapp.com/";

  useEffect(() => {
    const URL = "https://smanhq.herokuapp.com/";
    axios

      .get(`${URL}api/v1/tags/`)

      .then((res, req) => {
        setTagState(res.data.tag);
      })

      .catch((err) => {
        // err msg

        alert.error(message(err));
      });
  }, [alert]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      tag: "",
    },
    onSubmit: (values) => {
      formik.values.description.length > 3000
        ? alert.info(
            `Maximum Amount Of Gist Characters Is 3000 You Enterd ${formik.values.description.length}`
          )
        : axios
            .post(`${URL}api/v1/gists/`, formik.values, {
              withCredentials: true,
            })
            .then((res, req) => {
              if (res.data.status === "SUCCESS") {
                alert.show(res.data.message);

                history.push("/gist");
              }
            })
            .catch((err) => {
              // err msg
              alert.show(message(err));
            });
    },
  });

  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>

      <form onSubmit={formik.handleSubmit}>
        <WriteIn>
          <TextTitle>Pick a stingy title</TextTitle>
          <Select
            name="tag"
            value={formik.values.tag}
            onChange={formik.handleChange}
          >
            <Option value="All">Choose stingy tag</Option>

            {tagState.map((tag, index) => (
              <Option key={index} value={tag._id}>
                {tag.title}
              </Option>
            ))}
          </Select>

          <Box>
            <InputField
              id="title"
              name="title"
              type="text"
              placeholder="Stingy Gist Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Box>

          <TextGist
            label="Write your rules"
            name="description"
            placeholder="Your Stingy Gist"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </WriteIn>

        <Label htmlFor="upload">
          <PhotoCamera />
        </Label>
        <InputImg
          type="file"
          accept="image/*"
          onChange={getInputFile}
          id="upload"
        />
        <button onClick={handleClick}> Add picture</button>
        <Img src={imageUrl} alt="upload" />

        <Post value="Post" type="submit" />
      </form>
    </Container>
  );
};

export default WriteGist;
