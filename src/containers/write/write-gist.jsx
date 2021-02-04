import React from "react";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
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
  Label,Img
} from "./write.style";

const WriteGist = ({ history }) => {
  const uploadDispatcher = FileHandler();
  const alert = useAlert();
  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  const handleClick = (e) => {
    e.preventDefault();
    uploadFile();
    alert.show('pic added now post')
    uploadFile();
    console.log(imageUrl)
  }


  const URL = "https://smanhq.herokuapp.com/";
  
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: ""
    },
    onSubmit: (values) => {
      alert.show(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
      .post(`${URL}api/v1/gists/`, formik.values, { withCredentials: true })
        .then((res, req) => {
          console.log(res.data);
          res.data.message === "SUCCESS"
            ? history.push("/gist") : alert.show('not posted')
        })
        .catch((err) => {
          // err msg
          alert.show(err);
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
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            
            value={formik.values.description}
          />
           <TextGist
           
            name="description"
            
            onChange={imageUrl}
            
            value={formik.values.image}
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
