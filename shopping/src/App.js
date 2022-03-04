import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Data from './components/data';
import Edit from './components/Edit';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/Edit/:id">
            <Edit />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
