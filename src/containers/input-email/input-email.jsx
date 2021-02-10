import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import { useFormik } from "formik";
import { useAlert } from "react-alert";
import message from "../../constant/response";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";
import Button from "../../components/button/button";
// import { Link } from "react-router-dom";
import axios from "axios";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const Container = styled.div`
  background: #843035;
  padding: 150px 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
`;

const HdText = styled(HeadText)`
  font-size: 32px;
  color: #fff;

  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

const Text = styled(MedText)`
  font-size: 18px;
  color: #fff;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
export const Box = styled.div`
  display: flex;

  align-items: center;
  margin-right: 0.7rem;
  justify-self: ${(props) => (props.end ? "flex-end" : "none")};
  color: white;
`;

export const InputField = styled.input`
  background: #843035;
  padding: 15px 45px;

  font-size: 16px;
  line-height: 24px;

  /* for box */
  width: 100%;
  height: 20px;
  outline: 0;
  color: white;
  border-radius: 5px;
  border: none;
  border: solid 2px white;

  &::placeholder {
    color: white;
  }
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:focus {
    background: rgba(0,0,0,0.5);
  }
`;

export const Email = styled(EmailOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;
// const ForgotPass = styled(Button)``;

const InputEmail = ({ history }) => {
  const URL = "https://smanhq.herokuapp.com/";

  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${URL}api/v1/users/sendResetPasswordToken`, formik.values, {
          withCredentials: true,
        })
        .then((res, req) => {
          if (res.data.status === "SUCCESS") {
            alert.show(res.data.message);

            return history.push("/password-reset");
          }
        })
        .catch((err) => {
          // err msg
          alert.error(message(err));
        });
    },
  });

  // const alert = useAlert();
  // const handleClick = () => {
  //   alert.show("Recovery email sent");
  // };
  return (
    <Container>
      <EmailIcon style={{ color: "#FCEA4A", width: "4rem", height: "4rem" }} />
      <HdText>Recovery email</HdText>
      <Text>Input your email for recovery code.</Text>
      <Form onSubmit={formik.handleSubmit} method="post">
        <Box>
          <Email />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>

        {/* <Link to="/password-reset" style={{ color: "#843035" }}> */}
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          value="Confirm code"
        />
        {/* </Link> */}
      </Form>
    </Container>
  );
};

export default InputEmail;
