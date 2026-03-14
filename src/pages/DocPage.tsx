import { useTranslation } from 'react-i18next';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons';
import './DocPage.css';

type DocSection = 'getting-started' | 'themes' | 'plugins';

const sections: { slug: DocSection; i18nKey: string }[] = [
  { slug: 'getting-started', i18nKey: 'gettingStarted' },
  { slug: 'themes', i18nKey: 'themes' },
  { slug: 'plugins', i18nKey: 'plugins' },
];

export default function DocPage() {
  const { t } = useTranslation();
  const { section } = useParams<{ section: string }>();

  const currentIndex = sections.findIndex((s) => s.slug === section);
  if (currentIndex === -1) return <Navigate to="/docs" replace />;

  const current = sections[currentIndex];
  const prev = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const next = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  const isComingSoon = current.slug === 'themes' || current.slug === 'plugins';

  return (
    <main className="doc-page">
      {/* Sidebar */}
      <aside className="doc-sidebar">
        <div className="doc-sidebar-header">
          <Link to="/docs" className="doc-sidebar-back">
            {t('docs.title')}
          </Link>
        </div>
        <nav className="doc-sidebar-nav">
          <span className="doc-sidebar-group-label">{t('docs.sidebarGroups.guides')}</span>
          {sections.map((s) => (
            <Link
              key={s.slug}
              to={`/docs/${s.slug}`}
              className={`doc-sidebar-link${s.slug === section ? ' active' : ''}`}
            >
              {t(`docs.sidebar.${s.i18nKey}`)}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <article className="doc-content">
        <div className="doc-breadcrumb">
          <Link to="/docs">{t('docs.title')}</Link>
          <span className="doc-breadcrumb-sep">/</span>
          <span>{t(`docs.sidebar.${current.i18nKey}`)}</span>
        </div>

        <h1 className="doc-title">{t(`docs.${current.i18nKey}.title`)}</h1>
        <p className="doc-desc">{t(`docs.${current.i18nKey}.desc`)}</p>

        {isComingSoon ? (
          <div className="doc-coming-soon">
            <div className="doc-coming-soon-dot" />
            <p>{t(`docs.${current.i18nKey}.comingSoon`)}</p>
          </div>
        ) : (
          <div className="doc-placeholder">
            <p>{t('docs.placeholder')}</p>
          </div>
        )}

        {/* Prev / Next */}
        <div className="doc-nav">
          {prev ? (
            <Link to={`/docs/${prev.slug}`} className="doc-nav-card doc-nav-prev">
              <span className="doc-nav-label">{t('docs.nav.prev')}</span>
              <span className="doc-nav-title">{t(`docs.sidebar.${prev.i18nKey}`)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/docs/${next.slug}`} className="doc-nav-card doc-nav-next">
              <span className="doc-nav-label">{t('docs.nav.next')}</span>
              <span className="doc-nav-title">
                {t(`docs.sidebar.${next.i18nKey}`)}
                <ArrowRightIcon size={14} />
              </span>
            </Link>
          ) : <div />}
        </div>
      </article>
    </main>
  );
}
