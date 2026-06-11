
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Guides from './pages/Guides';
import Subscribe from './pages/Subscribe';
import Toast from './components/Toast';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('blackMesaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    const subscription = userData.email === 'test@gmail.com' || userData.email === 'admin@mail.ru' ? 'premium' : 'free';
    
    const userWithTimestamp = {
      ...userData,
      loginTime: new Date().toISOString(),
      subscription,
      tokens: subscription === 'premium' ? 50 : 10,
      usedTrial: false
    };
    
    setUser(userWithTimestamp);
    localStorage.setItem('blackMesaUser', JSON.stringify(userWithTimestamp));
    
    setToast({
      message: `Добро пожаловать, ${userData.username}!`,
      type: 'success'
    });
    
    // Закрываем модалку после успешного входа
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('blackMesaUser');
    
    setToast({
      message: 'Вы успешно вышли из системы',
      type: 'info'
    });
  };

  const handleUpgrade = (newSubscription) => {
    if (user) {
      const updatedUser = {
        ...user,
        subscription: newSubscription,
        subscriptionExpires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      };
      
      setUser(updatedUser);
      localStorage.setItem('blackMesaUser', JSON.stringify(updatedUser));
      
      setToast({
        message: `🎉 Поздравляем! Вы получили подписку ${newSubscription.toUpperCase()}`,
        type: 'success'
      });
      
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Header 
          user={user} 
          onLogin={handleLogin} 
          onLogout={handleLogout}
          authModalOpen={authModalOpen}
          setAuthModalOpen={setAuthModalOpen}
          onOpenAuthModal={() => setAuthModalOpen(true)}
          
        />
        
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:category" element={<Achievements />} />
          <Route 
            path="/guides" 
            element={
              <Guides 
                user={user} 
                onUpgrade={handleUpgrade}
                onOpenAuthModal={() => setAuthModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/subscribe" 
            element={
              <Subscribe 
                user={user} 
                onUpgrade={handleUpgrade}
                onOpenAuthModal={() => setAuthModalOpen(true)}
              />

            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;