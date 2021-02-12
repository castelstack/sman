import React from "react";
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import message from "../../constant/response";
import { Alert, TYPE } from "../../components/alert";

//import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import axios from "axios";
import { Input } from "@material-ui/core";

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
const Form = styled.form`
display: grid;
grid-template-columns: 1fr;
grid-gap: 30px;
`
const WriteIn = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
margin-bottom: 180px;
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
// create new rules
const WriteRules = ({ history }) => {
  const URL = "https://smanhq.herokuapp.com/";

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      formik.values.title.length > 1000
        ? Alert(
            `Maximum Amount Of Rule Characters Is 1000 You Enterd ${formik.values.description.length}`,
            TYPE.DARK
          )
        : axios
            .post(`${URL}api/v1/rules`, formik.values, {
              withCredentials: true,
            })
            .then((res, req) => {
              if (res.data.status === "SUCCESS") {
                Alert(
                  "Rule Suggestion Succesful. Subject To Approval By SMAN Admins",
                  TYPE.SUCCESS
                );

                history.push("/rules-and-regulation");
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
        <Heading>Write Your Rule</Heading>
      </HeadBox>
      <WriteIn>
        <Form onSubmit={formik.handleSubmit}>
        <Input
            label='Write your rules'
            name='description'
            multiline
      rows="7"
      fullWidth
            placeholder='Your Stingy Rule'
            onChange={formik.handleChange}
            value={formik.values.title}
          />
         
          <Button value="Post" type="submit" onClick={formik.handleSubmit} />
        </Form>
      </WriteIn>
    </Container>
  );
};

export default WriteRules;
