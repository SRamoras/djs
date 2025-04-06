import React from 'react';
import Header from './components/layoutcomponents/Header';  // ajuste o caminho conforme sua estrutura de pastas
import Footer from './components/layoutcomponents/Footer';  // ajuste o caminho conforme sua estrutura de pastas

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
