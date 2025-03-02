import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/Navbar";
import Header from "./component/header";
import Footer from "./component/footer";
import Lopoto from "./pages/lopoto";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lopoto" element={<Lopoto />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
