import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/home/Home.jsx';
import HomeNew from './components/home/HomeNew.jsx';
import Header from './components/header/Header.jsx';
import Shop from './components/shop/Shop.jsx';
import AboutUs from './components/aboutus/AboutUs.jsx';
// import { BrowserRouter } from "react-router";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<HomeNew />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <HomeNew/> */}
    </div>
  );
}

export default App;
