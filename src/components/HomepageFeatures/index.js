import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fortify Platform',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        Holistic, inclusive, and extensible application security platform to orchestrate and guide your AppSec journey.  
      </>
    ),
  },
  {
    title: 'Language coverage ',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        Accurate support for 30+ major languages and their frameworks, with agile updates backed by the industry-leading Software Security Research (SSR) team.
      </>
    ),
  },

  {
    title: 'Integrations',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        Find issues early and often and fix them as part of the development testing cycles. Our integration ecosystem is easy for developers to use, allowing for a more secure software supply chain and maturity at scale.
      </>
    ),
  },

  {
    title: 'SAST',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        Automated static code analysis helps developers eliminate vulnerabilities and build secure software with Static Code Analyzer.
      </>
    ),
  },

  {
    title: 'DAST',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        WebInspect dynamic testing analyzes applications in their running state and simulates attacks against an application to find vulnerabilities.
      </>
    ),
  },

  {
    title: 'Software Composition Analysis',
    Svg: require('@site/static/img/cyberres.svg').default,
    description: (
      <>
        Integrated results deliver one platform for remediation, reporting, and analytics of open source and custom code.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureItem}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
