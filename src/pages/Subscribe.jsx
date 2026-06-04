// pages/Subscribe.jsx
import React, { useEffect } from 'react';
import SidePanel from '../components/SidePanel';
import './Subscribe.css';

const Subscribe = ({ user, onUpgrade, onOpenAuthModal }) => {
  
  // ХАК ДЛЯ ДИПЛОМА: Как только страница загружается, она автоматически
  // делает пользователя премиумом и сразу перенаправляет на руководства.
  useEffect(() => {
    if (onUpgrade) {
      onUpgrade('premium');
    }
    const timer = setTimeout(() => {
      window.location.href = '/guides';
    }, 100);
    return () => clearTimeout(timer);
  }, [onUpgrade]);

  const handleSubscribe = (plan) => {
    if (onUpgrade) {
      onUpgrade('premium');
    }
    window.location.href = '/guides';
  };

  return (
    <div className="page-container">
      <SidePanel side="left" />
      
      <main className="content main-content">
        <h1>Оформление подписки</h1>
        
        <div className="subscription-options">
          <div className="subscription-card">
            <div className="card-header">
              <h3>Premium подписка активирована</h3>
              <div className="price">0 ₽<span>/навсегда</span></div>
            </div>
            
            <ul className="features">
              <li> Полный доступ к 5 готовым руководствам</li>
              <li> Пошаговые инструкции со скриншотами</li>
              <li> Все будущие обновления</li>
              <li> Поддержка от автора</li>
              <li> Доступ на всех устройствах</li>
            </ul>
            
            <button 
              className="subscribe-btn"
              onClick={() => handleSubscribe('premium')}
            >
              Перейти к руководствам
            </button>
          </div>
        </div>
        
        <div className="payment-info">
          <h3>Подписка успешно подключена по умолчанию!</h3>
          <p>Вы получили доступ ко всем руководствам на странице <a href="/guides">РУКОВОДСТВА</a></p>
        </div>
      </main>
      
      <SidePanel side="right" />
    </div>
  );
};

export default Subscribe;