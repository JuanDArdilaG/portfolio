import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import Pagination from "../Shared/Pagination/Pagination";
import TranslateButtons from "../Shared/TranslateButtons/TranslateButtons";
import ProfileImage from "./components/ProfileImage/ProfileImage";

import "./AboutMe.css";

export default function AboutMe() {
  const { t } = useTranslation();
  const [posY, setPosY] = useState(0);
  const history = useHistory();
  useEffect(() => {
    setPosY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const y = window.scrollY;
      if (y < posY) {
        history.replace("/home");
      } else if (y > posY) {
      }
      setPosY(y);
    });
    return () => {};
  }, [posY, history]);
  return (
    <div>
      <Helmet>
        <title>About Juan Ardila's</title>
      </Helmet>
      <div className="h-screen flex flex-col flex-wrap w-11/12 pl-8 mx-auto m-1 overflow-y-hidden">
        <h1 className="text-center text-5xl font-semibold mt-10">
          {t("aboutme.title")}
        </h1>
        <div className="flex flex-nowrap">
          <div className="w-1/3">
            <ProfileImage
              imagesrc="./profile.jpg"
              className="w-3/4 float-right mt-4 flex-shrink-0"
            />
          </div>
          <div
            id="aboutme-paragraphs"
            className="w-2/3 mx-32 mt-10 text-justify"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum
              vitae, dolores nemo voluptates laudantium pariatur quidem dolore
              molestiae harum ea inventore cum eaque assumenda labore, adipisci
              aliquam quos necessitatibus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ut tempore officia totam non odit
              labore, explicabo sunt est nam enim ullam harum corporis doloribus
              vitae dolorem necessitatibus assumenda, dignissimos accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum
              vitae, dolores nemo voluptates laudantium pariatur quidem dolore
              molestiae harum ea inventore cum eaque assumenda labore, adipisci
              aliquam quos necessitatibus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ut tempore officia totam non odit
              labore, explicabo sunt est nam enim ullam harum corporis doloribus
              vitae dolorem necessitatibus assumenda, dignissimos accusamus.
            </p>
          </div>
        </div>

        <Pagination selected="About Me" />
        <TranslateButtons />
      </div>
    </div>
  );
}
