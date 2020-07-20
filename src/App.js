import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import { Route, Switch } from 'react-router-dom';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/payment" component={Payment}/>
          <Route path="/" component={FoodBuilder} exact/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
