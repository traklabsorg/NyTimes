import React from "react";
import Navbar from "./component/Navbar";
import Articles from "./component/Articles";
export const Home = () => (
  <div className="body_wrapper">
    <Navbar />
    <Articles rowFlex="flex-row-reverse" />
  </div>
);
