import { useState } from "react";

import Page from "./components/Page/Page.jsx";
import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Auth0ProviderWithNavigate } from "./auth0Provider.jsx";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      {/* Would import the Nagication and Footer and see it on every page */}
      <Auth0ProviderWithNavigate>
        <Navbar />
        <main>
          <Page currentPage={currentPage} />
        </main>
      </Auth0ProviderWithNavigate>
    </>
  );
}

export default App;
