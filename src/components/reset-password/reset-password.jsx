import React from "react";
import { HeadText, MedText } from "../../constant/styles";
import Button from "../button/button";
import reset from "../../images/reset.svg";
import message from "../../constant/response";
import styled from "styled-components";
import axios from "axios";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { useFormik } from "formik";
import { useAlert } from "react-alert";

const Container = styled.div`
  background: #843035;
  padding: 150px 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
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
  font-size: 20px;
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
const Image = styled.img`
  width: 4rem;
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
  }
`;

export const Email = styled(EmailOutlinedIcon)`
  transform: translateX(2rem);
  margin-right: -3px;
  color: white;
`;

const ResetPassword = ({ history }) => {
  const URL = "https://smanhq.herokuapp.com/";

  const alert = useAlert();

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    onSubmit: (values) => {
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/users/verifyResetPasswordToken`, formik.values, {
          withCredentials: true,
        })
        .then((res, req) => {
          if (res.data.status === "SUCCESS") {
            alert.show(res.data.message);

            return history.push("/set-new-password");
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
      <Image src={reset} alt="email_sent" />
      <HdText>Email sent!</HdText>
      <Text>
        Check your mail box for recovery mail containing code. please input the
        code in the text box to recover your mail.
      </Text>
      <form onSubmit={formik.handleSubmit} method="post">
        <Box>
          <Email />
          <InputField
            id="token"
            name="token"
            type="token"
            placeholder="Token"
            onChange={formik.handleChange}
            value={formik.values.token}
          />
        </Box>
        <Button type="submit" value="Reset password" />
      </form>
    </Container>
  );
};

export default ResetPassword;
