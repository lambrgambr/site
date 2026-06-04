// components/GuideCard.jsx
import React, { useState } from 'react';
import './GuideCard.css';

const GuideCard = ({ guide, user }) => {
  const [expanded, setExpanded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#666';
    }
  };

  const getDifficultyText = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'Лёгкое';
      case 'medium': return 'Среднее';
      case 'hard': return 'Сложное';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="guide-card">
      <div className="guide-header" onClick={() => setExpanded(!expanded)}>
        <img src={guide.icon} alt={guide.title} className="guide-icon" />
        <div className="guide-info">
          <h3>{guide.title}</h3>
          <p className="guide-description">{guide.description}</p>
          <div className="guide-meta">
            <span className="difficulty" style={{ backgroundColor: getDifficultyColor(guide.difficulty) }}>
              {getDifficultyText(guide.difficulty)}
            </span>
            <span className="time">{guide.time}</span>
            <span className="chapter"> {guide.chapter}</span>
          </div>
        </div>
        <button className={`expand-btn ${expanded ? 'active' : ''}`}>
  ❯
</button>
      </div>
      
      {expanded && (
        <div className="guide-content">
          <h4>Пошаговая инструкция:</h4>
          <ol className="steps">
            {guide.content.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          
          {guide.images && guide.images.length > 0 && (
            <div className="guide-images">
              <h4>Скриншоты:</h4>
              <div className="images-grid">
                {guide.images.map((img, index) => (
                  <img key={index} src={img} alt={`Шаг ${index + 1}`} className="guide-image" />
                ))}
              </div>
            </div>
          )}
          
          <div className="guide-footer">
            <div className="user-info">
                {user?.username?.charAt(0).toUpperCase()}
              <span>{user?.username}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideCard;