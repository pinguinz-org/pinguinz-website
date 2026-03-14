import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { GithubIcon, MenuIcon, CloseIcon } from './icons';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/download', label: t('nav.download') },
    { to: '/docs', label: t('nav.docs') },
    { to: '/roadmap', label: t('nav.roadmap') },
    { to: '/about', label: t('nav.about') },
  ];

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={() => setMobileOpen(false)}>
          <span className="header-logo-mark">p</span>
          <span className="header-logo-text">pinguinz</span>
        </Link>

        <nav className={`header-nav${mobileOpen ? ' open' : ''}`}>
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`header-nav-link${location.pathname === to ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/pinguinz"
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-link header-nav-external"
          >
            <GithubIcon size={16} />
            {t('nav.github')}
          </a>
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="header-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
