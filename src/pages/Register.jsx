import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/background/20220218/pngtree-pastel-color-aesthetic-background-with-vintage-leaves-image_986553.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = e =>{
    const{ name, value } = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const handleClick = () => {
    const {firstName, lastName, username, email, password, confirmPassword} = user
    if(firstName && lastName && username && email && password && (password === confirmPassword)) {
      axios.post("http://localhost:9002/register", user)
      .then(res => alert(res.data.message))
      navigate("../login", { replace: true })
    } else {
      alert("Invalid Input")
    }
    
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input name="firstName" value={user.firstName} placeholder="first name" onChange={handleChange}/>
          <Input name="lastName" value={user.lastName} placeholder="last name" onChange={handleChange}/>
          <Input name="username" value={user.username} placeholder="username" onChange={handleChange}/>
          <Input name="email" value={user.email} placeholder="email" onChange={handleChange}/>
          <Input name="password" value={user.password} placeholder="password" onChange={handleChange}/>
          <Input name="confirmPassword" value={user.confirmPassword} placeholder="confirm password" onChange={handleChange}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
