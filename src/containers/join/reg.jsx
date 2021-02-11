/* eslint-disable no-restricted-globals */
import React, {useState} from "react";
import message from "../../constant/response";
import constants from "../../constant";
import { useFormik } from "formik";
import axios from "axios";
import {
  FormContainer,
  Box,
  Boxx,
  Boxxx,
  InputField,
  InputFieldd,
  Icon,
  ContiuneButton,
  Email,
  LocationOn,
  Form,
  Person,
  Password,
  Passwordd,
  Select,
} from "./join.style";
import { Alert, TYPE } from "../../components/alert";
const { userHelpers } = constants;

const SignupForm = (props) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const [passwordShown, setPasswordShown] = useState(false);
  const [states] = useState(userHelpers);

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
      axios
        .post(`${URL}api/v1/users/signup`, formik.values)
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            Alert(res.data.message, TYPE.SUCCESS);
          }

          setTimeout(() => location.replace("/join/login"), 1000);
        })

        .catch((err) => {
          // what now? render error message
          Alert(message(err), TYPE.ERROR);
          // console.log(err);
        });
    },
  });
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Icon />
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
          <Person />
          <InputField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Box>
        <Boxx>
          <LocationOn />

          <Select
            id="branch"
            name="branch"
            value={formik.values.tag}
            onChange={formik.handleChange}
          >
            <option value="select a state">Select Branch</option>

            {states.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Boxx>

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

        <Boxxx>
          <InputFieldd
            id='password'
            name='password'
            type={passwordShown ? "text" : "password"}
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
           <Passwordd onClick={togglePasswordVisiblity}/>
        </Boxxx>
        <Box>
          <Password />
          <InputField
            id="passwordConfirm"
            name="passwordConfirm"
            
            placeholder="Confirm password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
        </Box>
        <ContiuneButton type="submit" value="Register" big />
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
