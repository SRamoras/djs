import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';  // ajuste o caminho se necessário
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <Router>
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