import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GithubIcon, WindowsIcon, AppleIcon, LinuxIcon } from '../components/icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Landing.css';

function BentoCard({ className = '', delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bento-card reveal${isVisible ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ChatIllustration() {
  return (
    <div className="bento-chat-illustration">
      <div className="bento-bubble bento-bubble-left">
        <div className="bento-bubble-line" />
        <div className="bento-bubble-line short" />
      </div>
      <div className="bento-bubble bento-bubble-right">
        <div className="bento-bubble-line" />
      </div>
      <div className="bento-bubble bento-bubble-left">
        <div className="bento-bubble-line medium" />
      </div>
    </div>
  );
}

const stats = ['openSource', 'platforms', 'license', 'privacy'] as const;
const platforms = ['windows', 'macos', 'linux'] as const;
const platformIcons = { windows: WindowsIcon, macos: AppleIcon, linux: LinuxIcon };
const values = ['freedom', 'transparency', 'privacy'] as const;

export default function Landing() {
  const { t } = useTranslation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLElement>(0.05);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>(0.2);
  const { ref: platformRef, isVisible: platformVisible } = useScrollReveal<HTMLElement>(0.1);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal<HTMLElement>(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLElement>();

  return (
    <main className="landing">
      {/* Hero */}
      <section ref={heroRef} className={`hero${heroVisible ? ' visible' : ''}`}>
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="hero-badge">{t('hero.badge')}</div>
          <h1 className="hero-title">
            <span className="hero-title-gradient">{t('hero.title')}</span>
          </h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <Link to="/download" className="btn btn-primary btn-lg">
              {t('hero.cta')}
              <ArrowRightIcon size={18} />
            </Link>
            <a href="#features" className="btn btn-ghost btn-lg">
              {t('hero.learnMore')}
            </a>
          </div>
          <p className="hero-hint">{t('hero.ctaHint')}</p>
        </div>
      </section>

      {/* Stats strip */}
      <div ref={statsRef} className={`stats-strip${statsVisible ? ' visible' : ''}`}>
        <div className="stats-strip-inner">
          {stats.map((key, i) => (
            <div key={key} className="stats-item" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="stats-value">{t(`landing.stats.${key}.value`)}</span>
              <span className="stats-label">{t(`landing.stats.${key}.label`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features — Bento Grid */}
      <section id="features" className="features">
        <div className="features-inner">
          <div className="section-header">
            <span className="section-overline">{t('features.overline')}</span>
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-desc">{t('features.desc')}</p>
          </div>

          <div className="bento-grid">
            <BentoCard className="bento-span-2" delay={0}>
              <div className="bento-content">
                <h3 className="bento-title">{t('features.chat.title')}</h3>
                <p className="bento-desc">{t('features.chat.desc')}</p>
              </div>
              <ChatIllustration />
            </BentoCard>

            <BentoCard delay={80}>
              <h3 className="bento-title">{t('features.workspace.title')}</h3>
              <p className="bento-desc">{t('features.workspace.desc')}</p>
            </BentoCard>

            <BentoCard delay={160}>
              <h3 className="bento-title">{t('features.voice.title')}</h3>
              <p className="bento-desc">{t('features.voice.desc')}</p>
            </BentoCard>

            <BentoCard delay={240}>
              <h3 className="bento-title">{t('features.marketplace.title')}</h3>
              <p className="bento-desc">{t('features.marketplace.desc')}</p>
            </BentoCard>

            <BentoCard className="bento-span-full bento-oss" delay={320}>
              <div className="bento-oss-content">
                <h3 className="bento-title">{t('features.openSource.title')}</h3>
                <p className="bento-desc">{t('features.openSource.desc')}</p>
              </div>
              <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost bento-oss-btn">
                <GithubIcon size={16} />
                GitHub
                <ArrowRightIcon size={14} />
              </a>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section ref={platformRef} className={`platforms${platformVisible ? ' visible' : ''}`}>
        <div className="platforms-inner">
          <div className="section-header">
            <span className="section-overline">{t('landing.platforms.overline')}</span>
            <h2 className="section-title">{t('landing.platforms.title')}</h2>
            <p className="section-desc">{t('landing.platforms.desc')}</p>
          </div>

          <div className="platforms-grid">
            {platforms.map((os, i) => {
              const Icon = platformIcons[os];
              return (
                <div key={os} className="platform-card" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="platform-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="platform-name">{t(`landing.platforms.${os}.name`)}</h3>
                  <p className="platform-req">{t(`landing.platforms.${os}.req`)}</p>
                  <Link to="/download" className="platform-link">
                    {t('hero.cta')}
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className={`values${valuesVisible ? ' visible' : ''}`}>
        <div className="values-inner">
          <div className="section-header">
            <span className="section-overline">{t('landing.values.overline')}</span>
            <h2 className="section-title">{t('landing.values.title')}</h2>
          </div>

          <div className="values-grid">
            {values.map((key, i) => (
              <div key={key} className="value-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="value-number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="value-title">{t(`landing.values.${key}.title`)}</h3>
                <p className="value-desc">{t(`landing.values.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section ref={ctaRef} className={`bottom-cta${ctaVisible ? ' visible' : ''}`}>
        <div className="bottom-cta-glow" />
        <div className="bottom-cta-inner">
          <h2 className="bottom-cta-title">{t('cta.title')}</h2>
          <p className="bottom-cta-desc">{t('cta.desc')}</p>
          <div className="bottom-cta-actions">
            <Link to="/download" className="btn btn-primary btn-lg">
              {t('hero.cta')}
              <ArrowRightIcon size={18} />
            </Link>
            <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
