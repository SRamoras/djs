import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Mainpage from './pages/Mainpage';
import Kidspage from './pages/Kidspage';
import Agriculturepage from './pages/Agriculturepage';
import Transportationpage from './pages/Transportationpage';
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
                <Route 
          path="/kids" 
          element={
            <Layout>
              <Kidspage />
            </Layout>
          } 
        />
                <Route 
          path="/transportation" 
          element={
            <Layout>
              <Transportationpage />
            </Layout>
          } 
        />
<Route 
          path="/agriculture" 
          element={
            <Layout>
              <Agriculturepage />
            </Layout>
          } 
        />

      </Routes>
    </Router>
  );
}

export default App;
