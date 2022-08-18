import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Header/> */}
      <AppContainer>
        <Routes>
          <Route
            path="/"
          />
          <Route
            path="/product"
          />
          <Route
            path="/cart"
          />
          <Route path="" element={<h1>404: Oops!</h1>} />
        </Routes>
        {/* <Footer /> */}
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`

`

export default App;
