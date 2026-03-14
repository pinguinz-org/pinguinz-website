import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GithubIcon } from './icons';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">p</span>
              <span className="footer-logo-text">pinguinz</span>
            </Link>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.product')}</h4>
            <Link to="/download" className="footer-link">{t('nav.download')}</Link>
            <Link to="/releases" className="footer-link">{t('nav.releases')}</Link>
            <Link to="/roadmap" className="footer-link">{t('nav.roadmap')}</Link>
            <Link to="/docs" className="footer-link">{t('nav.docs')}</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.community')}</h4>
            <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="footer-link footer-link-icon">
              <GithubIcon size={14} />
              GitHub
            </a>
            <Link to="/about" className="footer-link">{t('nav.about')}</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.legal')}</h4>
            <span className="footer-link footer-link-placeholder">{t('footer.privacy')}</span>
            <span className="footer-link footer-link-placeholder">{t('footer.terms')}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="footer-social">
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
