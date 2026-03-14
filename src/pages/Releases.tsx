import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Releases.css';

interface Release {
  version: string;
  date: string;
  tag: 'latest' | 'previous';
  highlights: string[];
}

const releases: Release[] = [
  {
    version: 'v2.0.0',
    date: '2026-03-15',
    tag: 'latest',
    highlights: [
      'releases.v200.h1',
      'releases.v200.h2',
      'releases.v200.h3',
    ],
  },
  {
    version: 'v1.1.0',
    date: '2026-03-14',
    tag: 'previous',
    highlights: [
      'releases.v110.h1',
      'releases.v110.h2',
      'releases.v110.h3',
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-03-13',
    tag: 'previous',
    highlights: [
      'releases.v100.h1',
      'releases.v100.h2',
      'releases.v100.h3',
    ],
  },
];

export default function Releases() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.05);

  return (
    <main ref={ref} className={`releases-page${isVisible ? ' visible' : ''}`}>
      <div className="releases-inner">
        <div className="releases-header">
          <h1 className="releases-title">{t('releases.title')}</h1>
          <p className="releases-subtitle">{t('releases.subtitle')}</p>
        </div>

        <div className="releases-timeline">
          {releases.map((release, i) => (
            <div
              key={release.version}
              className={`release-card${release.tag === 'latest' ? ' release-latest' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="release-card-header">
                <div className="release-version-row">
                  <h2 className="release-version">{release.version}</h2>
                  {release.tag === 'latest' && (
                    <span className="release-badge">{t('releases.latest')}</span>
                  )}
                </div>
                <time className="release-date">{release.date}</time>
              </div>
              <ul className="release-highlights">
                {release.highlights.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
