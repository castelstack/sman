import React from "react";
import Button from "../../components/button/button";
import axios from "axios";
import { useAlert } from "react-alert";
import message from "../../constant/response";
import { useFormik } from "formik";
import { MedText, SmText } from "../../constant/styles";
import styled from "styled-components";
import { TextGist } from "../../containers/write/write.style";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 3rem 6rem;
  @media only screen and (max-width: 650px) {
    padding: 54px 20px;
  }
`;

const Suggest = ({ history }) => {
  const alert = useAlert();

  const URL = "https://smanhq.herokuapp.com/";

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      formik.values.title.length > 3000
        ? alert.info(
            `Maximum Amount Of Tag Characters Is 1000 You Enterd ${formik.values.description.length}`
          )
        : axios
            .post(`${URL}api/v1/tags`, formik.values, {
              withCredentials: true,
            })
            .then((res, req) => {
              if (res.data.status === "SUCCESS") {
                alert.success(
                  "Tag Suggestion Succesful. Subject To Approval By SMAN Admins"
                );

                history.push("/");
              }
            })
            .catch((err) => {
              // err msg
              alert.error(message(err));
            });
    },
  });

  return (
    <Container>
      <MedText> Suggestion</MedText>
      <SmText>Suggest A New Gist Tag/Category Idea For Our Association</SmText>

      <form onSubmit={formik.handleSubmit}>
        <TextGist
          label="Write your rules"
          name="title"
          placeholder="Your Tag Suggestion"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <Button value="Send" type="submit" onClick={formik.handleSubmit} />
      </form>
    </Container>
  );
};

export default Suggest;
