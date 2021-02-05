import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import message from "../../constant/response";
import { Form } from "../join/join.style";
import Button from "../../components/button/button";
import styled from "styled-components";
import { PhotoCamera } from "@material-ui/icons";
import FileHandler from "../../firebase/fileHandler";
import { useAlert } from "react-alert";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;

const Image = styled.img`
  height: 13rem;
  width: 15rem;
  border-radius: 10rem;
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

const InputImg = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
`;
const Label = styled.label`
  width: max-content;
  color: white;
  background: #00008b;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`;

const ProfileForm = (props) => {
  const [images, setImages] = React.useState([]);

  const URL = "https://smanhq.herokuapp.com/";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      position: "member",
      password: "",
      passwordConfirm: "",
      branch: "",
      lastName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form data", formik.values);
      axios
        .post(`${URL}api/v1/users/signup`, formik.values)
        .then((res) => {
          console.log(res.data);
          res.data.status === "SUCCESS"
            ? props.history.goBack()
            : alert("Registeration failed!");
        })
        .catch((err) => {
          // what now?
          alert(message(err));
        });
      uploadFile();
    },
  });

  const alert = useAlert();
  const uploadDispatcher = FileHandler();

  const { uploadFile, imageUrl, getInputFile } = uploadDispatcher;

  return (
    <Container>
      <div>
        <Label htmlFor="upload">
          <PhotoCamera />
          Add picture
        </Label>
        <InputImg type="file" onChange={getInputFile} id="upload" />
      </div>
      <Form>
        <Box>
          <InputField
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Box>

        <Box>
          <InputField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Box>
        <Box>
          <InputField
            id="branch"
            name="branch"
            type="text"
            placeholder="State, e.g Abuja"
            onChange={formik.handleChange}
            value={formik.values.branch}
          />
        </Box>

        <Box>
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>

        <Box>
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Box>
      </Form>
      <Button value="Save" />
    </Container>
  );
};

export default ProfileForm;
