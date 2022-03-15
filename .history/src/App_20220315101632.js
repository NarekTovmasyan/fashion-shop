
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Router from "react-router-dom"

function App() {
  
  return (
    <div className="App">
     <Header />
     
     <Home />
     <Footer />
    </div>
  );
}

export default App;
