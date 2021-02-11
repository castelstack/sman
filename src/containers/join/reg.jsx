/* eslint-disable no-restricted-globals */
import React, {useState} from "react";
import message from "../../constant/response";
import { useFormik } from "formik";
import axios from "axios";
import { useAlert } from "react-alert";
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

const SignupForm = (props) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const [items] = React.useState([
    { value: "abia", label: "state" },

    { id: 1,value: "abuja", label: "state" },

    { id: 2,value: "adamawa", label: "state" },

    { id: 3,value: "akwa Ibom", label: "state" },

    { id: 4,value: "anambra", label: "state" },

    { id: 5,value: "bauchi", label: "state" },

    { id: 6,value: "bayelsa", label: "state" },

    { id: 7,value: "benue", label: "state" },

    { id: 8,value: "borno", label: "state" },

    { id: 9,value: "cross river", label: "state" },

    { id: 10,value: "delta", label: "state" },

    { id: 11,value: "ebonyi", label: "state" },

    { value: "edo", label: "state" },

    { value: "ekiti", label: "state" },

    { value: "enugu", label: "state" },

    { value: "gombe", label: "state" },

    { value: "imo", label: "state" },

    { value: "jigawa", label: "state" },

    { value: "kaduna", label: "state" },

    { value: "kano", label: "state" },

    { value: "katsina", label: "state" },

    { value: "kebbi", label: "state" },

    { value: "kogi", label: "state" },

    { value: "kwara", label: "state" },

    { value: "lagos", label: "state" },

    { value: "nasarawa", label: "state" },

    { value: "niger", label: "state" },

    { value: "ogun", label: "state" },

    { value: "ondo", label: "state" },

    { value: "osun", label: "state" },

    { value: "oyo", label: "state" },

    { value: "plateau", label: "state" },

    { value: "rivers", label: "state" },

    { value: "sokoto", label: "state" },

    { value: "taraba", label: "state" },

    { value: "yobe", label: "state" },

    { value: "zamfara", label: "state" },
  ]);
  const [passwordShown, setPasswordShown] = useState(false);
  const URL = "https://smanhq.herokuapp.com/";
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const alert = useAlert();

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
      alert.show(JSON.stringify(values, null, 2));
      axios
        .post(`${URL}api/v1/users/signup`, formik.values)
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            alert.show(res.data.message);
          }

          setTimeout(() => location.replace("/join/login"), 1000);
        })

        .catch((err) => {
          // what now? render error message
          alert.error(message(err));
          // console.log(err);
        });
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Icon />
          <InputField
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Box>

        <Box>
          <Person />
          <InputField
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last name'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Box>
        <Boxx>
          <LocationOn />
         
        <Select
          id='branch'
          name='branch'
          value={formik.values.tag}
          onChange={formik.handleChange}
        >
          <option value='select a state'>Select Branch</option>

          {items.map((item, index) => (
            <option key={index} value={item._id}>
              {item.value}
            </option>
          ))}
        </Select>
        </Boxx>

        <Box>
          <Email />
          <InputField
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>

        <Boxxx>
          <InputFieldd
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
           <Passwordd onClick={togglePasswordVisiblity}/>
        </Boxxx>
        <Box>
          <Password />
          <InputField
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            placeholder='Confirm password'
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
        </Box>
        <ContiuneButton type='submit' value='Register' big />
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
