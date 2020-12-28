import './App.css';
import {Route} from 'react-router-dom';
import {Catalog, Product} from './pages';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Route path="/" component={Catalog} exact/>
        <Route path="/product" component={Product} exact/>
      </div>
    </div>
  );
}

export default App;
