import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";

type AppState = {
  lang: "spa" | "eng";
  setLang: (lang: "spa" | "eng") => void;
};
export const AppContext = React.createContext({
  lang: "spa",
  setLang: () => {},
} as AppState);

export default function App() {
  const [lang, setLang] = useState("spa" as "spa" | "eng");
  return (
    <div>
      <AppContext.Provider
        value={{
          lang,
          setLang,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/aboutme">
              <AboutMe />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
