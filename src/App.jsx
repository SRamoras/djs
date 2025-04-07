import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <Router basename="/djs">
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Mainpage />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
