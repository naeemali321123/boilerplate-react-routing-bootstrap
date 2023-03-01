import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import OurTeam from "../pages/our-team/OurTeam";
import Tokens from "../pages/tokens/Tokens";
import ConnectWallet from "../pages/connect-wallet/ConnectWallet";
import LightPaper from "../pages/light-paper/LightPaper";
import Navbar from "../componenets/Navbar";

export default function Routing() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="out-team" element={<OurTeam />} />
          <Route path="tokens" element={<Tokens />} />
          <Route path="connect-wallet" element={<ConnectWallet />} />
          <Route path="light-paper" element={<LightPaper />} />
        </Routes>
      </Router>
    </>
  );
}
