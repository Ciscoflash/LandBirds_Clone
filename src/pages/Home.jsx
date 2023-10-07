import React from "react";
import Main from "../components/Main";
import { default as ManImage } from "../assets/images/image-3.jpg";

const Home = () => {
  return (
    <div>
      <Main
        image={ManImage}
        textOverlay={"Welcome to the Translation Office"}
        textPosition={""}
      ></Main>
    </div>
  );
};

export default Home;
