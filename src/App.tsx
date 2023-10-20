import { Routes, Route } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';
import Header from './components/Header';
import Favorite from './pages/Favorite';
import Footer from './components/Footer';

import { GlobalStyle } from './GlobalStyled';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </UserProvider>
    
    
  );
}

export default App
