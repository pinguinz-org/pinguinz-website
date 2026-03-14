import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, GithubIcon } from '../components/icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Docs.css';

const guides = ['gettingStarted', 'themes', 'plugins'] as const;

export default function Docs() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLElement>(0.05);
  const { ref: guidesRef, isVisible: guidesVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: resourcesRef, isVisible: resourcesVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <main ref={headerRef} className={`docs-page${headerVisible ? ' visible' : ''}`}>
      <div className="docs-inner">
        {/* Header */}
        <div className="docs-header">
          <span className="docs-overline">{t('docs.sidebarGroups.guides')}</span>
          <h1 className="docs-title">{t('docs.title')}</h1>
          <p className="docs-subtitle">{t('docs.subtitle')}</p>
        </div>

        {/* Guide cards */}
        <div ref={guidesRef} className={`docs-guides${guidesVisible ? ' visible' : ''}`}>
          {guides.map((key, i) => {
            const isComingSoon = key === 'themes' || key === 'plugins';
            return (
              <div
                key={key}
                className={`docs-guide-card${isComingSoon ? ' coming-soon' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="docs-guide-number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="docs-guide-title">{t(`docs.${key}.title`)}</h3>
                <p className="docs-guide-desc">{t(`docs.${key}.desc`)}</p>
                {isComingSoon && (
                  <div className="docs-guide-badge">
                    <div className="docs-guide-badge-dot" />
                    {t(`docs.${key}.comingSoon`)}
                  </div>
                )}
                {!isComingSoon && (
                  <div className="docs-guide-placeholder">
                    {t('docs.placeholder')}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resources */}
        <div ref={resourcesRef} className={`docs-resources${resourcesVisible ? ' visible' : ''}`}>
          <h2 className="docs-section-title">{t('docs.sidebarGroups.resources')}</h2>
          <div className="docs-resource-grid">
            <a
              href="https://github.com/pinguinz"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-resource-card"
            >
              <div className="docs-resource-icon">
                <GithubIcon size={20} />
              </div>
              <div className="docs-resource-body">
                <span className="docs-resource-label">{t('docs.resources.github')}</span>
                <span className="docs-resource-hint">{t('docs.resources.githubHint')}</span>
              </div>
              <ArrowRightIcon size={14} className="docs-resource-arrow" />
            </a>
            <a
              href="https://github.com/pinguinz"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-resource-card"
            >
              <div className="docs-resource-icon-text">API</div>
              <div className="docs-resource-body">
                <span className="docs-resource-label">{t('docs.resources.api')}</span>
                <span className="docs-resource-hint">{t('docs.resources.apiHint')}</span>
              </div>
              <ArrowRightIcon size={14} className="docs-resource-arrow" />
            </a>
            <a
              href="https://github.com/pinguinz"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-resource-card"
            >
              <div className="docs-resource-icon-text">+</div>
              <div className="docs-resource-body">
                <span className="docs-resource-label">{t('docs.resources.contributing')}</span>
                <span className="docs-resource-hint">{t('docs.resources.contributingHint')}</span>
              </div>
              <ArrowRightIcon size={14} className="docs-resource-arrow" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
