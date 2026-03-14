import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GithubIcon } from '../components/icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

interface FaqItem {
  q: string;
  a: string;
}

const faqKeys = ['whyAnother', 'openSource', 'privacy', 'contribute', 'platforms'] as const;

export default function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.05);

  const faqs: FaqItem[] = faqKeys.map((key) => ({
    q: t(`about.faq.${key}.q`),
    a: t(`about.faq.${key}.a`),
  }));

  return (
    <main ref={ref} className={`about-page${isVisible ? ' visible' : ''}`}>
      <div className="about-inner">
        {/* Philosophy */}
        <section className="about-hero">
          <span className="about-overline">{t('about.overline')}</span>
          <h1 className="about-title">{t('about.title')}</h1>
          <p className="about-desc">{t('about.desc')}</p>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="about-value">
            <h3 className="about-value-title">{t('about.values.freedom.title')}</h3>
            <p className="about-value-desc">{t('about.values.freedom.desc')}</p>
          </div>
          <div className="about-value">
            <h3 className="about-value-title">{t('about.values.transparency.title')}</h3>
            <p className="about-value-desc">{t('about.values.transparency.desc')}</p>
          </div>
          <div className="about-value">
            <h3 className="about-value-title">{t('about.values.privacy.title')}</h3>
            <p className="about-value-desc">{t('about.values.privacy.desc')}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="about-faq">
          <h2 className="about-faq-title">{t('about.faqTitle')}</h2>
          <div className="about-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="about-faq-item">
                <h3 className="about-faq-q">{faq.q}</h3>
                <p className="about-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="about-bottom-cta">
          <div className="about-cta-actions">
            <Link to="/download" className="btn btn-primary btn-lg">
              {t('hero.cta')}
              <ArrowRightIcon size={18} />
            </Link>
            <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
