import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  border-radius: 20px;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: black;
    color:white;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/productList", {replace: true})
  }

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
