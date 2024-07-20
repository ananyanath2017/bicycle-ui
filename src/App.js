import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <div className="App">
       <Header/>
       <Home/>
    </div>
  );
}

export default App;
