import "./App.css"; 
import Footer from "./components/Footer";
import Mainbar from "./components/Mainbar";
import Minibar  from "./components/Minibar";
import Navbar from "./components/Navbar";
import Newsbar from "./components/Newsbar";
import Products from "./components/Products";
import Topbar from "./components/Topbar";

function App() {
  return <div className="App">
   
    <Topbar />
    <Navbar />
    <Minibar />
     <Mainbar />
      <Products />
      <Newsbar />
     <Footer />


  </div>;
}

export default App;
