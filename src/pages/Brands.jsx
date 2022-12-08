import styled from "styled-components";
// import { brands } from "../components/data";
// import {data} from "./data";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
// import Brand from "../components/Brand";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
`;

const Title = styled.h1`
  margin-top: 15px;
  margin-left: 642px;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
    ${'' /* margin: 20px 20px; */}
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: #fef6f6;
    #girls{
        display: inline;
        width: 947px;
        height: 500px;
    }
    #logo{
        display: inline;
        width: 550px;
        height: 500px;
    }
    #food{
        display: inline;
        width: 850px;
        height: 520px;
        margin: 10px 30px;
    }
    #logo1{
        display: inline;
        width: 530px;
    }
`;

const Brands = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Trending Brands</Title>
        {/* {brands.map((item) => (
          <Brand item={item} key={item.id} />
        ))} */}
        <ImageContainer>
          <img src="https://cdn.sanity.io/images/92ui5egz/production/d2d1b929c56782b2ed18b3406196721d9ccde9e4-1920x1080.jpg?w=1200&h=675&fit=crop&auto=format" alt="" id="food" />
          <img src="https://cdn.sanity.io/images/92ui5egz/production/a68f6d1a1962a293fbb4cdf5631a6a3ea9475bee-1080x1080.svg?w=600&h=600&fit=crop&auto=format" alt="" id="logo1" />
        </ImageContainer>
        <img src="https://www.parleproducts.com/Uploads/banner/1hbanner_1hbanner_parle-banner.webp" alt="brand" width="1315px" height="470px" style={{margin: '10px 100px'}}/>
        <ImageContainer>
          <img id="girls" src="https://cdn.sanity.io/images/92ui5egz/production/630bf563047458c0d18ced4ac07b62a828366768-1920x1080.jpg?w=1200&h=675&fit=crop&auto=format" alt="" />
          <img src="https://cdn.sanity.io/images/92ui5egz/production/192ad18323fc60ffca01bb930e536cc4dff2b0b6-1080x1080.jpg?w=600&h=600&fit=crop&auto=format" alt="" id="logo" />
        </ImageContainer>
        <img src="http://www.pepsicoindia.co.in/images/librariesprovider16/brand/our-brandsbd2fcdaeef576d378be6ff5000e253d8.png?sfvrsn=d775b841_0" alt="" style={{margin: '10px 5px'}}/>
        <ImageContainer>
          <img src="https://cdn.sanity.io/images/92ui5egz/production/59d14b56b7b1615d422de8f7d420c714711f169e-1080x1080.jpg?w=600&h=600&fit=crop&auto=format" alt="" id="logo" />
          <img src="https://cdn.sanity.io/images/92ui5egz/production/81f276b93364e662d3e1e123a743c035562ab545-1920x1080.jpg?w=1200&h=675&fit=crop&auto=format" alt="" id="girls" />
        </ImageContainer>
        <img src="https://www.nestle.in/sites/g/files/pydnoa451/files/Nestle.inBanners-1265x396--08-Sep-2022-v1.jpg" alt="" width="1515px" style={{margin: '10px 0'}}/>
        <ImageContainer>
          <img src="https://cdn.sanity.io/images/92ui5egz/production/c02d9d8a63ee344dc6fdde29be98045d6bfe5840-1920x1080.jpg?w=1200&h=675&fit=crop&auto=format" alt="" id="girls" />
          <img src="https://cdn.sanity.io/images/92ui5egz/production/098aae3c9f33b4290bc4147754da577f33884d33-1080x1080.jpg?w=600&h=600&fit=crop&auto=format" alt="" id="logo" />
        </ImageContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Brands;