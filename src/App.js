import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./Container/MainPage";
import AOS from "aos";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AirDropPage from "./Pages/AirdropPage";
import LandingPage from "./Pages/LandingPage";
import PrivateSellPage from "./Pages/PrivateSellPage";
import PublicSellPage from "./Pages/PublicSellPage";
import "aos/dist/aos.css";
import PdfViewer from "./Components/Pdf/PdfView";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [popup, showPopup] = useState("true");
  return (
    <div className="App">
      <Switch>
        <MainPage>
          <Route exact path="/">
            <HomePage popupToggle={popup} popupFunction={showPopup} />
          </Route>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/airdrop" component={AirDropPage} />
          <Route path="/private-sell" component={PrivateSellPage} />
          <Route path="/public-sell" component={PublicSellPage} />
          <Route path="/whitepaper" component={PdfViewer} />
        </MainPage>
      </Switch>
    </div>
  );
}

export default App;
