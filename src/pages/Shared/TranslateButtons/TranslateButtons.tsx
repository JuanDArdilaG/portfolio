import React, { PropsWithoutRef } from "react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../../App";

export interface TranslateButtonsProps {}

export default function TranslateButtons(
  props: PropsWithoutRef<TranslateButtonsProps>
) {
  const { i18n } = useTranslation();
  const changeLanguage = useCallback(
    (lng: "spa" | "eng") => {
      i18n.changeLanguage(lng === "spa" ? "es" : "en");
    },
    [i18n]
  );

  return (
    <AppContext.Consumer>
      {({ lang, setLang }) => (
        <div className="h-screen fixed right-0 flex flex-col justify-center items-center">
          <button
            className={`mx-3 ${
              lang === "spa" ? "opacity-100 w-8" : "opacity-40 w-6"
            } focus:outline-none transition-all duration-300 mb-3`}
            onClick={(e) => {
              e.preventDefault();
              if (lang !== "spa") {
                changeLanguage("spa");
                setLang("spa");
              }
            }}
          >
            <img src="./colombia_flag_icon.png" alt="Spanish" title="Español" />
          </button>
          <button
            className={`mx-3 ${
              lang === "eng" ? "opacity-100 w-8" : "opacity-40 w-6"
            } focus:outline-none transition-all duration-300 mt-3`}
            onClick={(e) => {
              e.preventDefault();
              if (lang !== "eng") {
                changeLanguage("eng");
                setLang("eng");
              }
            }}
          >
            <img src="./usa_flag_icon.png" alt="English" title="English" />
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
}
