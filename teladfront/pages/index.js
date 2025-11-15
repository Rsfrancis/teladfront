import React, { useState } from 'react';
import { Home, Trophy, BookOpen, User, Flame } from 'lucide-react';

export default function Index() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  const trailIcons = [
    { id: 1, icon: '👑', type: 'crown' },
    { id: 2, icon: '🔖', type: 'bookmark' },
    { id: 3, icon: '📖', type: 'book' },
    { id: 4, icon: '🔖', type: 'bookmark' },
    { id: 5, icon: '❓', type: 'question' },
    { id: 6, icon: '📖', type: 'book' },
    { id: 7, icon: '🔖', type: 'bookmark' },
    { id: 8, icon: '📖', type: 'book' },
    { id: 9, icon: '❓', type: 'question' },
    { id: 10, icon: '🔖', type: 'bookmark' },
    { id: 11, icon: '📖', type: 'book' },
    { id: 12, icon: '🚩', type: 'flag' }
  ];

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="header-top">
            <div className="title-wrapper">
              <span className="book-icon">📖</span>
              <h1 className="title">Trilha de Leitura</h1>
            </div>
            <div className="stats">
              <div className="stat-item">
                <Flame style={{ color: '#ff6b35', width: '20px', height: '20px' }} />
                <span className="stat-number">3</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🏅</span>
                <span className="stat-number">45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trail Container */}
        <div className="trail-container">
          <div className="trail-path">
            {trailIcons.map((item, index) => (
              <div key={item.id} className="trail-item">
                <button
                  className={`trail-icon ${index === 4 ? 'active' : ''} ${index >= 4 ? 'green' : ''}`}
                  onMouseEnter={() => setHoveredIcon(item.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={`Fase ${item.id}`}
                >
                  {item.icon}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="footer-nav">
          <button 
            className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            aria-label="Início"
          >
            <Home className="nav-icon" />
            <span className="nav-label">Início</span>
          </button>
          <button 
            className={`nav-button ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
            aria-label="Conquistas"
          >
            <Trophy className="nav-icon" />
            <span className="nav-label">Conquistas</span>
          </button>
          <button 
            className={`nav-button ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
            aria-label="Biblioteca"
          >
            <BookOpen className="nav-icon" />
            <span className="nav-label">Biblioteca</span>
          </button>
          <button 
            className={`nav-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            aria-label="Perfil"
          >
            <User className="nav-icon" />
            <span className="nav-label">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}