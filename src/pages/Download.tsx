import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { WindowsIcon, AppleIcon, LinuxIcon, DownloadIcon, GithubIcon, ArrowRightIcon } from '../components/icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Download.css';

type OS = 'windows' | 'macos' | 'linux';

function detectOS(): OS {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('mac')) return 'macos';
  return 'linux';
}

const osConfig: Record<OS, { Icon: typeof WindowsIcon }> = {
  windows: { Icon: WindowsIcon },
  macos: { Icon: AppleIcon },
  linux: { Icon: LinuxIcon },
};

const steps = ['download', 'install', 'start'] as const;

export default function Download() {
  const { t } = useTranslation();
  const detectedOS = useMemo(detectOS, []);
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.05);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: ossBannerRef, isVisible: ossBannerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal<HTMLDivElement>();

  const osList: OS[] = ['windows', 'macos', 'linux'];
  const secondaryList = osList.filter((os) => os !== detectedOS);
  const { Icon: PrimaryIcon } = osConfig[detectedOS];

  return (
    <main ref={ref} className={`download-page${isVisible ? ' visible' : ''}`}>
      <div className="download-inner">
        <div className="download-header">
          <h1 className="download-title">{t('download.title')}</h1>
          <p className="download-subtitle">{t('download.subtitle')}</p>
        </div>

        {/* Primary — detected OS */}
        <div className="download-primary">
          <div className="download-primary-info">
            <div className="download-primary-icon">
              <PrimaryIcon size={40} />
            </div>
            <div>
              <h2 className="download-primary-name">{t(`download.${detectedOS}`)}</h2>
              <p className="download-primary-meta">
                {t('download.version')}: <code>v1.5.0</code> · {t(`download.requirements.${detectedOS}`)}
              </p>
            </div>
          </div>
          <button className="btn btn-primary download-primary-btn">
            <DownloadIcon size={18} />
            {t('download.downloadFor', { os: t(`download.${detectedOS}`) })}
          </button>
        </div>

        {/* Secondary — other OS */}
        <div className="download-secondary">
          {secondaryList.map((os, i) => {
            const { Icon } = osConfig[os];
            return (
              <div
                key={os}
                className="download-card"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="download-card-top">
                  <div className="download-os-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="download-os-name">{t(`download.${os}`)}</h3>
                  <p className="download-req">{t(`download.requirements.${os}`)}</p>
                </div>
                <button className="btn btn-ghost download-btn">
                  <DownloadIcon size={16} />
                  {t('download.downloadFor', { os: t(`download.${os}`) })}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom ── */}
      <div className="download-bottom">
        <div className="download-bottom-inner">

          {/* Steps */}
          <div
            ref={stepsRef}
            className={`dl-steps${stepsVisible ? ' visible' : ''}`}
          >
            <span className="dl-section-overline">{t('download.stepsOverline')}</span>
            <div className="dl-steps-grid">
              {steps.map((step, i) => (
                <div key={step} className="dl-step" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="dl-step-number">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="dl-step-title">{t(`download.steps.${step}.title`)}</h4>
                  <p className="dl-step-desc">{t(`download.steps.${step}.desc`)}</p>
                  {i < steps.length - 1 && <div className="dl-step-connector" />}
                </div>
              ))}
            </div>
          </div>

          {/* Open Source banner */}
          <div
            ref={ossBannerRef}
            className={`dl-oss-banner reveal${ossBannerVisible ? ' visible' : ''}`}
          >
            <div className="dl-oss-glow" />
            <div className="dl-oss-content">
              <h3 className="dl-oss-title">{t('download.oss.title')}</h3>
              <p className="dl-oss-desc">{t('download.oss.desc')}</p>
              <div className="dl-oss-stats">
                <div className="dl-oss-stat">
                  <span className="dl-oss-stat-value">{t('download.oss.stat1Value')}</span>
                  <span className="dl-oss-stat-label">{t('download.oss.stat1Label')}</span>
                </div>
                <div className="dl-oss-stat-divider" />
                <div className="dl-oss-stat">
                  <span className="dl-oss-stat-value">{t('download.oss.stat2Value')}</span>
                  <span className="dl-oss-stat-label">{t('download.oss.stat2Label')}</span>
                </div>
                <div className="dl-oss-stat-divider" />
                <div className="dl-oss-stat">
                  <span className="dl-oss-stat-value">{t('download.oss.stat3Value')}</span>
                  <span className="dl-oss-stat-label">{t('download.oss.stat3Label')}</span>
                </div>
              </div>
            </div>
            <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost dl-oss-btn">
              <GithubIcon size={16} />
              {t('download.sourceCode')}
              <ArrowRightIcon size={14} />
            </a>
          </div>

          {/* Info section */}
          <div
            ref={infoRef}
            className={`dl-info${infoVisible ? ' visible' : ''}`}
          >
            <div className="dl-info-requirements">
              <h4 className="dl-info-title">{t('download.requirementsTitle')}</h4>
              <div className="dl-req-table">
                {osList.map((os) => {
                  const { Icon } = osConfig[os];
                  return (
                    <div key={os} className="dl-req-row">
                      <div className="dl-req-os">
                        <Icon size={16} />
                        <span>{t(`download.${os}`)}</span>
                      </div>
                      <span className="dl-req-spec">{t(`download.requirements.${os}`)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="dl-info-links">
              <h4 className="dl-info-title">{t('download.linksTitle')}</h4>
              <div className="dl-link-cards">
                <a href="https://github.com/pinguinz" target="_blank" rel="noopener noreferrer" className="dl-link-card">
                  <GithubIcon size={18} />
                  <div>
                    <span className="dl-link-label">{t('download.sourceCode')}</span>
                    <span className="dl-link-hint">github.com/pinguinz</span>
                  </div>
                  <ArrowRightIcon size={14} />
                </a>
                <Link to="/releases" className="dl-link-card">
                  <div className="dl-link-icon-placeholder">
                    <span>v</span>
                  </div>
                  <div>
                    <span className="dl-link-label">{t('download.changelog')}</span>
                    <span className="dl-link-hint">{t('download.changelogHint')}</span>
                  </div>
                  <ArrowRightIcon size={14} />
                </Link>
                <Link to="/roadmap" className="dl-link-card">
                  <div className="dl-link-icon-placeholder">
                    <span>R</span>
                  </div>
                  <div>
                    <span className="dl-link-label">{t('download.roadmapLabel')}</span>
                    <span className="dl-link-hint">{t('download.roadmapHint')}</span>
                  </div>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>

          <p className="download-version-footer">
            {t('download.version')}: <code>v1.5.0</code> · {t('download.openSourceNotice')}
          </p>
        </div>
      </div>
    </main>
  );
}
