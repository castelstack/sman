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
  Post,
  InputImg,
  Label,
  //Img,
  // PreviewImg,
  FormControll,
  TextFieldd
} from "./write.style";
import { Input, InputLabel, Select, } from "@material-ui/core";

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
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>

      <form onSubmit={formik.handleSubmit}>
        <WriteIn>

          <FormControll >
            <InputLabel id='demo-simple-select-label'>Select Tag</InputLabel>
            <Select
              name='tag'
              value={formik.values.tag}
              onChange={formik.handleChange}
              >
              <option value='select a state'>Tags</option>
              {tagState.map((tag, index) => (
                <option style={{ padding: '.8rem' }} key={index} value={tag._id}>
                  {tag.title}
                </option>
              ))}
            </Select>
          </FormControll>

             
          <TextFieldd
          
          id='title'
            name='title'
            type='text'
            placeholder='Stingy Gist Title'
            onChange={formik.handleChange}
            value={formik.values.title}
          
        />
         

          <Input
            label='Write your gist'
            name='description'
            multiline
      rows="7"
            placeholder='Your Stingy Gist'
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </WriteIn>

        <Label htmlFor='upload'>
          <PhotoCamera />
        </Label>
        <InputImg
          type='file'
          accept='image/*'
          onChange={getInputFile}
          id='upload'
          />
          {/* <Img src={jk} alt='upload' /> */}
          {/* {imageUrl === "firebase" ? "" : <Img src={imageUrl} alt='upload' />}
        <PreviewImg onClick={handleClick}>
          Click to add and preview picture
        </PreviewImg> */}

        <Post value='Post' type='submit' onClick={handleClick}/>
      </form>
    </Container>
  );
};

export default EditGist;
