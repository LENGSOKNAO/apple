import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import BannerGrid from "../components/BannerGrid";
import Slider from "../components/Slider";
import ListSlider from "../components/ListSlider";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <div className="py-2"></div>
      <Banner2 />
      <div className="py-2"></div>
      <Banner3 />
      <div className="py-2"></div>
      <BannerGrid />
      <div className="py-2"></div>
      <Slider />
      <div className="py-2"></div>
      <ListSlider />
      <div className="py-2"></div>
    </Layout>
  );
};

export default Home;
