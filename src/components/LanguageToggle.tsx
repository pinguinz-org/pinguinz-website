import { useTranslation } from 'react-i18next';
import './ToggleButton.css';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
  };

  return (
    <button className="toggle-btn" onClick={toggle} title={t('language.toggle')} aria-label={t('language.toggle')}>
      <span className="toggle-btn-text">{i18n.language === 'ko' ? 'EN' : '한'}</span>
    </button>
  );
}
