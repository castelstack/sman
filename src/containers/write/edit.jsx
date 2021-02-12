import React, { useEffect, useState } from "react";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
import message from "../../constant/response";
import { useFormik } from "formik";
import axios from "axios";
import { Alert, TYPE } from "../../components/alert";
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
  TitleGist,
  PreviewImg,
} from "./write.style";

const EditGist = ({ history, location: { gist } }) => {
  const uploadDispatcher = FileHandler();

  const [tagState, setTagState] = useState([]);

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  const handleClick = (e) => {
    e.preventDefault();

    uploadFile();

    Alert(
      "Gist Picture Succesfully Uploaded 🌠 🌠 🌠 Now Post Gist",
      TYPE.INFO
    );
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

        Alert(err.message, TYPE.ERROR);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, description, image, tag } = gist;

  const formik = useFormik({
    initialValues: {
      title,
      description,
      image,
      tag,
    },
    onSubmit: (values) => {
      formik.values.image = imageUrl;

      formik.values.description.length > 3000
        ? Alert(
            `Maximum Amount Of Gist Characters Is 3000 You Enterd ${formik.values.description.length}`,
            TYPE.WARNING
          )
        : axios
            .patch(`${URL}api/v1/gists/${gist.slug}`, formik.values, {
              withCredentials: true,
            })
            .then((res, req) => {
              if (res.data.status === "SUCCESS") {
                Alert(res.data.message, TYPE.DARK);

                history.push("/gist");
              }
            })
            .catch((err) => {
              // err msg
              Alert(message(err), TYPE.ERROR);
            });
    },
  });

  return (
    <Container>
      <HeadBox>
        <Heading>Edit Your Stingy Gist</Heading>
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

          <TitleGist
            id="title"
            name="title"
            type="text"
            placeholder="Stingy Gist Title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

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
        <PreviewImg onClick={handleClick}>
          Click to add and preview picture
        </PreviewImg>

        {imageUrl === "firebase" ? "" : <Img src={imageUrl} alt="upload" />}
        <Post value="Post" type="submit" />
      </form>
    </Container>
  );
};

export default EditGist;