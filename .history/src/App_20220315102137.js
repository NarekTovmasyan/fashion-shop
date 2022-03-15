
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
