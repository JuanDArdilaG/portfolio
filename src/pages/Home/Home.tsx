import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import TechnologiesSection from "./components/TechnologiesSection/TechnologiesSection";
import TranslateButtons from "../Shared/TranslateButtons/TranslateButtons";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import Pagination from "../Shared/Pagination/Pagination";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [posY, setPosY] = useState(0);
  const history = useHistory();
  useEffect(() => {
    setPosY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const y = window.scrollY;
      if (y < posY) {
      } else if (y > posY) {
        history.replace("/aboutme");
      }
      setPosY(y);
    });
    return () => {};
  }, [posY, history]);
  return (
    <>
      <Helmet>
        <title>Juan Ardila's Portfolio</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center flex-wrap w-11/12 mx-auto m-1 overflow-y-hidden">
        <WelcomeMessage />
        <TechnologiesSection />
        {/* <ProfileImage
        imagesrc="profile.jpg"
        className="w-60 mx-auto mt-20 opacity-30 hover:opacity-100 hover:w-80 transition-opacity duration-500"
      /> */}
        <TranslateButtons />
        <Pagination selected="Home" />
      </div>
    </>
  );
}
