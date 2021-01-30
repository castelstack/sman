import React from "react";
import { HeadText, SmText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import FileHandler from "../../firebase/fileHandler";
import { PhotoCamera } from "@material-ui/icons";
import { useFormik } from "formik";
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
padding: .5rem;
font-size: 18px;
font-family: 'Acme', sans-serif;
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
  
}`
const Option = styled.option`
border: none;
padding: .5rem;
font-size: 16px;
font-family: 'Acme', sans-serif;
background: #B0C4DE;
color: rgba(0, 0, 0, 0.88);

&:hover,
&:focus {
  color: #546c84;
  background-color: #fbfbfb;
}`;
const InputImg =styled.input`
opacity: 0;
width: 0.1px;
height: 0.1px;`
const Label = styled.label`
width: max-content;
color: white;
background: #00008B;
border: none;
display: flex;
align-items: center;
padding: 5px;
border-radius: 5px;
outline: none;;`
// create new gist
const WriteGist = ({ history }) => {
  const alert = useAlert();
  const uploadDispatcher = FileHandler();

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;


 
  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: {imageUrl}
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/gists/`, formik.values, { withCredentials: true })
        .then((res, req) => {
          
          console.log(res.data);
          // res.data.message === "SUCCESS"
          //   ? history.push("/")
          //   : alert("did not post");
        })
        .catch((err) => {
          // err msg
          alert(err);
        });
      uploadFile();
    },
  });

  const handleClick = () => {
    console.log("sent passwor reset");
    alert.show("Recovery email sent");
  };



  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Stingy Gist</Heading>
      </HeadBox>
       <form onSubmit={formik.handleSubmit}>
        <WriteIn>
          <TextTitle>Pick a stingy title</TextTitle>
           <Select
          
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
        >
          <Option value='Urgent2k'>Urgent2k</Option>
          <Option value='Valentine'>Valentine</Option>
          <Option value='Transport'>Transport</Option>
        </Select>
        
        <TextGist
          label='Write your rules'
          name='description'
          placeholder='Your Stingy Gist'
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </WriteIn>
        <div>
        <Label htmlFor='upload'><PhotoCamera/>Add picture</Label>
      <InputImg type="file" onChange={getInputFile} id='upload' />
      </div>
        <Post value='Post' type='submit' onClick={handleClick}/>
      </form>
      <div>
      </div>
    </Container>
  );
};

export default WriteGist;
