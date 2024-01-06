import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dollars MONO',
    link: '/category/dollars-mono',
    Svg: '/img/motion-capture.png',
    description1: (
      <>
        Using a single camera or video file,
      </>
    ),
    description2: (
      <>
        to capture expressions, gestures, and full-body movements in real-time!
      </>
    ),
  },
  {
    title: 'Dollars DEEP',
    link: '/category/dollars-deep',
    Svg: '/img/kinect.png',
    description1: (
      <>
        Based on Dollars MONO, Dollars DEEP can achieve enhanced hip and feet tracking
      </>
    ),
    description2: (
      <>
        by utilizing Azure Kinect
      </>
    ),
  },
  {
    title: 'Dollars EGAO',
    link: '/category/dollars-egao',
    Svg: '/img/face-scan.png',
    description1: (
      <>
        A completely free facial capture software,
      </>
    ),
    description2: (
      <>
      supporting VMC protocol, Unity, Unreal Engine, iClone8, and Virt-A-Mate
      </>
    ),
  },
  {
    title: 'Dollars VIVA',
    link: '/category/dollars-viva',
    Svg: '/img/motion-capture-viva.png',
    description1: (
      <>
    Using HTC Vive and compatible hardwares,
    </>
    ),
    description2: (
      <>
to offer low-cost, high-quality full-body motion capture
    </>
    ),
  },
  {
    title: 'Dollars MOTS',
    link: '/category/dollars-mots',
    Svg: '/img/T2M.png',
    description1: (
      <>
    Generate full-body motions based on text!
    </>
    ),
    description2: (
      <>
    </>
    ),
  },
  {
    title: 'Integration with Game Engines and DCC Software',
    link: '/category/integration',
    Svg: '/img/digital-platform.png',
    description1: (
      <>
        Use Dollars MoCap's data streaming and
      </>
    ),
    description2: (
      <>
        BVH files in game engines and 3D software
      </>
    ),
  },
];

function Feature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--4')} >
      <a href={link} style={{ textDecoration: 'none'}}>
          <div className="text--center">
            <img src={Svg} alt="alternative text" className={styles.featureSvg} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={{marginTop:'2em'}}>{title}</h3>
            <p>{description1}<br/>{description2}</p>
            <p></p>
          </div>
      </a>
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
