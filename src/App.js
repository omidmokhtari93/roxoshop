import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <FoodBuilder />
      </Layout>
    </div>
  );
}

export default App;
