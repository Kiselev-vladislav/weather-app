import React from "react";
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import {InputWrap } from './input'
import {CardList} from './card_list/index'
import {ErorBoundary} from './ErrorBoundary'
import { useCitiesList } from "./hooks/useCitiesList";


export const GlobalCotext = React.createContext()

function App() {
  const [state, dispatch] = useCitiesList();
   return (
    <BrowserRouter>
      <GlobalCotext.Provider value={{state, dispatch}}>
        <Routes>
        <Route path="/home">
            <div className="main">
              <InputWrap />
              <ErorBoundary>
                <CardList />
              </ErorBoundary>
            </div>
            </Route>
          </Routes> 
      </GlobalCotext.Provider>
    </BrowserRouter>
  );
}

export default App;
