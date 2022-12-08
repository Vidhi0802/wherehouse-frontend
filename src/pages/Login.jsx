import styled from "styled-components";
import {mobile} from "../responsive";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/old-wood-texture_36078-33.jpg?w=2000")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Sentence = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const handleClick = () => {
    axios.post("https://wherehouse-api.onrender.com/login", user)
    .then(res => alert(res.data.message))
    navigate("/", {replace: true})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input name="email" value={user.email} placeholder="email" onChange={handleChange}/>
          <Input name="password" value={user.password} placeholder="password" onChange={handleChange}/>
          <Button onClick={handleClick}>LOGIN</Button>
          <Sentence>DO NOT YOU REMEMBER THE PASSWORD?</Sentence>
          <Sentence><Link to="/register">CREATE A NEW ACCOUNT</Link></Sentence>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
