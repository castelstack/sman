import React from "react";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
//import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import axios from "axios";

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

  @media only screen and (max-width: 600px) {
    padding: 25px 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 0;
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
    font-size: 25px;
  }
`;
// create new rules
const WriteRules = ({ history }) => {
  
  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      title: "",
      
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/rules`, formik.values)
        .then((res) => {
          console.log(res.data);
          res.data.status === "SUCCESS"
            ? history.push("/")
            : alert("did not post");
        })
        .catch((err) => {
          // err msg
          alert(err);
        });
    },
  });
  return (
    <Container>
      <HeadBox>
        <Heading>Write Your Rule</Heading>
        
      </HeadBox>
      <WriteIn>
        <form onSubmit={formik.handleSubmit}>
        <input
          id='outlined-multiline-static'
          label='Write your rules'
          name='title'
          multiline
          rows={20}
          fullWidth
          placeholder='Your Stingy Rule'
          variant='outlined'
          onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Button value='Post' type='submit'/>
          </form>
      </WriteIn>
    </Container>
  );
};

export default WriteRules;
