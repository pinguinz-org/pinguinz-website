import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Roadmap.css';

interface Milestone {
  version: string;
  titleKey: string;
  descKey: string;
  status: 'done' | 'current' | 'planned';
  features: string[];
  iconLabel: string;
}

const milestones: Milestone[] = [
  {
    version: 'v1',
    titleKey: 'roadmap.v1.title',
    descKey: 'roadmap.v1.desc',
    status: 'done',
    features: ['roadmap.v1.f1', 'roadmap.v1.f2', 'roadmap.v1.f3'],
    iconLabel: '01',
  },
  {
    version: 'v1.1',
    titleKey: 'roadmap.v11.title',
    descKey: 'roadmap.v11.desc',
    status: 'done',
    features: ['roadmap.v11.f1', 'roadmap.v11.f2', 'roadmap.v11.f3'],
    iconLabel: '02',
  },
  {
    version: 'v2',
    titleKey: 'roadmap.v2.title',
    descKey: 'roadmap.v2.desc',
    status: 'current',
    features: ['roadmap.v2.f1', 'roadmap.v2.f2'],
    iconLabel: '03',
  },
  {
    version: 'v3',
    titleKey: 'roadmap.v3.title',
    descKey: 'roadmap.v3.desc',
    status: 'planned',
    features: ['roadmap.v3.f1', 'roadmap.v3.f2', 'roadmap.v3.f3'],
    iconLabel: '04',
  },
  {
    version: 'v4',
    titleKey: 'roadmap.v4.title',
    descKey: 'roadmap.v4.desc',
    status: 'planned',
    features: ['roadmap.v4.f1', 'roadmap.v4.f2', 'roadmap.v4.f3'],
    iconLabel: '05',
  },
  {
    version: 'v5',
    titleKey: 'roadmap.v5.title',
    descKey: 'roadmap.v5.desc',
    status: 'planned',
    features: ['roadmap.v5.f1', 'roadmap.v5.f2'],
    iconLabel: '06',
  },
];

function MilestoneCard({ ms, index }: { ms: Milestone; index: number }) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`rm-card rm-${ms.status} reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="rm-card-left">
        <div className={`rm-icon rm-icon-${ms.status}`}>
          <span>{ms.iconLabel}</span>
        </div>
        {ms.status === 'current' && <div className="rm-pulse" />}
      </div>
      <div className="rm-card-body">
        <div className="rm-card-top">
          <div className="rm-version-row">
            <span className="rm-version">{ms.version}</span>
            <span className={`rm-badge rm-badge-${ms.status}`}>
              {t(`roadmap.status.${ms.status}`)}
            </span>
          </div>
          <h3 className="rm-milestone-title">{t(ms.titleKey)}</h3>
          <p className="rm-milestone-desc">{t(ms.descKey)}</p>
        </div>
        <div className="rm-features">
          {ms.features.map((key) => (
            <div key={key} className="rm-feature-chip">
              <div className={`rm-check rm-check-${ms.status}`} />
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>(0.05);
  const { ref: visionRef, isVisible: visionVisible } = useScrollReveal<HTMLDivElement>();

  const currentMs = milestones.find((m) => m.status === 'current');
  const doneMs = milestones.filter((m) => m.status === 'done');
  const plannedMs = milestones.filter((m) => m.status === 'planned');

  return (
    <main className="roadmap-page">
      {/* Header */}
      <div
        ref={headerRef}
        className={`roadmap-header fade-in-up${headerVisible ? ' visible' : ''}`}
      >
        <span className="roadmap-overline">{t('roadmap.overline')}</span>
        <h1 className="roadmap-title">{t('roadmap.title')}</h1>
        <p className="roadmap-subtitle">{t('roadmap.subtitle')}</p>
      </div>

      <div className="roadmap-inner">
        {/* Current — hero spotlight */}
        {currentMs && (
          <section className="rm-spotlight">
            <div className="rm-spotlight-glow" />
            <MilestoneCard ms={currentMs} index={0} />
          </section>
        )}

        {/* Progress bar */}
        <div className="rm-progress-section">
          <div className="rm-progress-bar">
            <div className="rm-progress-fill" style={{ width: '40%' }} />
          </div>
          <div className="rm-progress-labels">
            {milestones.map((ms) => (
              <span
                key={ms.version}
                className={`rm-progress-label rm-progress-label-${ms.status}`}
              >
                {ms.version}
              </span>
            ))}
          </div>
        </div>

        {/* Completed */}
        {doneMs.length > 0 && (
          <section className="rm-section">
            <h2 className="rm-section-title">{t('roadmap.completedTitle')}</h2>
            <div className="rm-grid">
              {doneMs.map((ms, i) => (
                <MilestoneCard key={ms.version} ms={ms} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Planned */}
        {plannedMs.length > 0 && (
          <section className="rm-section">
            <h2 className="rm-section-title">{t('roadmap.plannedTitle')}</h2>
            <div className="rm-grid">
              {plannedMs.map((ms, i) => (
                <MilestoneCard key={ms.version} ms={ms} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Vision banner */}
        <div
          ref={visionRef}
          className={`rm-vision reveal${visionVisible ? ' visible' : ''}`}
        >
          <div className="rm-vision-content">
            <h3 className="rm-vision-title">{t('roadmap.vision.title')}</h3>
            <p className="rm-vision-desc">{t('roadmap.vision.desc')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
