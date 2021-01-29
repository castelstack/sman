import React from "react";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
//import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import axios from "axios";
import { useAlert } from "react-alert";


const Container = styled.div`
  margin: 20px 110px;

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
  margin-bottom: 200px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 400px) {
    margin-bottom: 80px;
  }
`;

const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
    padding: 30px 0;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
    padding: 10px 0;
  }

`;

const Heading = styled(HeadText)`
  font-size: 45px;
  line-height: 61px;

  color: #c4c4c4;

  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
const TextA = styled.textarea`
  resize: none;
  outline: none;
  width: 95%;
  height: 120px;
  border: 3px solid #cccccc;
  padding: 5px;
`;
// create new rules
const WriteRules = ({ history }) => {
  const alert = useAlert();
  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/rules`, formik.values, { withCredentials: true })
        .then((res, req) => {
          console.log(res.data);
          res.data.message === "SUCCESS"
            ? history.push("/rules-and-regulation")
            : alert("did not post");
        })
        .catch((err) => {
          // err msg
          alert(err);
        });
    },
  });

  const handleClick = () => {
   
    alert.show("Posted");
  };
  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Rule</Heading>
      </HeadBox>
      <WriteIn>
        <form onSubmit={formik.handleSubmit}>
          <TextA
            label='Write your rules'
            name='title'
            placeholder='Your Stingy Rule'
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <Button value='Post' type='submit' onCkick={handleClick}/>
        </form>
      </WriteIn>
    </Container>
  );
};

export default WriteRules;
