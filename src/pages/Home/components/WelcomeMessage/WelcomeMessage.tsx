import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect/dist/core";

import "./WelcomeMessage.css";

export default function WelcomeMessage() {
  const { t } = useTranslation();

  useEffect(() => {
    const typeWriter = new Typewriter(document.getElementById("typedtext"), {
      loop: true,
      delay: 50,
      cursor: "_",
    });

    const tout = setTimeout(
      () =>
        typeWriter
          .pauseFor(300)
          .typeString(`${t("iam1")}.`)
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(500)
          .typeString(`${t("iam2")}.`)
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(500)
          .typeString(`${t("iam3")}.`)
          .pauseFor(4000)
          .start(),
      4000
    );

    return () => {
      clearTimeout(tout);
    };
  }, [t]);

  return (
    <div>
      <h1 className="w-full text-6xl text-center font-thin">
        <span
          id="hi"
          className="font-light invisible"
          onAnimationEnd={() => {
            const element = document.getElementById("hi");
            if (element) {
              element.className = "font-light visible";
            }
          }}
        >
          {t("hi")}
        </span>
        <span
          id="presentation"
          className="invisible"
          onAnimationEnd={() => {
            const element = document.getElementById("presentation");
            if (element) {
              element.className = "visible";
            }
          }}
        >
          <span>{` ${t("welcomemessage")} `}</span>
          <span className="font-light text-blue-900">Juan Diego Ardila.</span>
        </span>
      </h1>

      <p className="text-center text-3xl font-extralight mt-6 mb-24 tracking-widest">
        <span className="font-normal">{t("welcomeline")}</span>
        <span className="px-2 bg-gray-50 border-b">
          <span id="typedtext"></span>
        </span>
      </p>
    </div>
  );
}
