/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaLocationDot, } from "react-icons/fa6";
import WeatherAPI from "../components/WeatherAPI";

const Home = (props) => {


  return (
  <>
    <WeatherAPI cidade='Sao Paulo'/>
  </>
  );
};

export default Home;
