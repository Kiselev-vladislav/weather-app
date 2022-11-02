import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { InputWrap } from "./input";
import { CardList } from "./card_list/index";
import { SingleCity } from "./SingleCity";
import { ErorBoundary } from "./ErrorBoundary";

import { useCitiesList } from "./hooks/useCitiesList";

export const GlobalCotext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalCotext.Provider value={{ state, dispatch }}>
        <div className="main">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <InputWrap />
                  <ErorBoundary>
                    <CardList />
                  </ErorBoundary>
                </>
              }
            ></Route>
            <Route path="/city/:city" element={<SingleCity></SingleCity>} />
          </Routes>
        </div>
      </GlobalCotext.Provider>
    </BrowserRouter>
  );
}

export default App;
