import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/home/Home.jsx';
import HomeNew from './components/home/HomeNew.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <div className="App">
       <Header/>
       {/* <Home/> */}
       <HomeNew/>
    </div>
  );
}

export default App;
