import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SunIcon, MoonIcon } from './icons';
import './ToggleButton.css';

export default function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('pinguinz-theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pinguinz-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button className="toggle-btn" onClick={toggle} title={t('theme.toggle')} aria-label={t('theme.toggle')}>
      {theme === 'dark' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </button>
  );
}
