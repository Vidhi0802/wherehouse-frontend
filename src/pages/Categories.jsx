import styled from "styled-components";
// import {data} from "./data";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
  margin-left: 620px;
`;

const Categories = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Trending Categories</Title>
      <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_01.jpg" width="1515px" alt="brand"/>
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1670348362_1669841242_Bindaas-Biscuiting-Desktop.jpg" alt="brand" style={{width: '100%'}}/>
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669702872_1669091076_03.jpg" alt="" width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669702940_1667813218_1666962559_Shop-From-Top-Categories-11.jpg" alt=""width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669702987_1669091131_02.jpg" alt=""width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703054_1669120666_Tea__Coffee.jpg" alt=""width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703137_1669120884_Biscuits__Cookies.jpg" alt=""width="210px" /> 
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716022_4.jpg" alt=""width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669717115_05.jpg" alt=""width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1670163194_1669915013_Atta-banner-1680-320.jpg" alt="brand"  style={{width: '100%'}}/>
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1670178031_1669820152_1669714269_Beauty-essentials-1680-320.jpg" alt=""  style={{width: '100%'}}/>
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669717161_07.jpg" alt="" width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667820020_3.jpg" alt="" width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667819990_2.jpg" alt="" width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669719637_4_Soaps__Bodywash.jpg" alt="" width="210px" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667197882_Food_n_Grain_4.jpg" alt="" width="210" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716604_05.jpg" alt="" width="210" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667197740_Food_n_Grain_7.jpg" alt="" width="210" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1670344703_Winter-Sips_1680X320.jpg" alt=""  style={{width: '100%'}}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Categories;