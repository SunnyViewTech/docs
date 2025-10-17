import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const MotionCaptureProducts = [
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
        by using a depth camera
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
    title: 'Dollars SAYA',
    link: '/category/dollars-saya',
    Svg: '/img/selfie.png',
    description1: (
      <>
        Use a single iOS device to
      </>
    ),
    description2: (
      <>
        to capture face, hands, and upper body.
      </>
    ),
  },
];

const FacialCaptureProducts = [
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
    title: 'Dollars NVIS',
    link: '/category/dollars-nvis',
    Svg: '/img/nvis.png',
    description1: (
      <>
       Powered by NVIDIA,
      </>
    ),
    description2: (
      <>
      delivering facial capture close to an iPhone
      </>
    ),
  },
  {
    title: 'Dollars LINK',
    link: '/category/dollars-link',
    Svg: '/img/link.png',
    description1: (
      <>
    Use Live Link Face 
      </>
    ),
    description2: (
      <>
      for facial capture in iClone8
      </>
    ),
  },
];

const InnovativeProducts = [
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
    title: 'Dollars SOMA',
    link: '/category/dollars-soma',
    Svg: '/img/victory.png',
    description1: (
      <>
       Camera-based Body and Hand Gesture Recognition
      </>
    ),
    description2: (
      <>
      </>
    ),
  },
];

const IntegrationFeatures = [
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
  {
    title: 'FAQ',
    link: '/faq',
    Svg: '/img/faq.png',
    description1: (
      <>
      Common questions about
      </>
    ),
    description2: (
      <>
       usage and integration
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

// For the second row features, we'll use a wider layout (col--6 instead of col--4)
function AdditionalFeature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--6')} >
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

// For the innovative products, we'll use a centered layout
function InnovativeFeature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--6 offset-col--3')} >
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
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>MoCap Products</h2>
          </div>
        </div>
        <div className="row">
          {MotionCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>FaceCap Products</h2>
          </div>
        </div>
        <div className="row">
          {FacialCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>Interaction Products</h2>
          </div>
        </div>
        <div className="row">
          {InnovativeProducts.map((props, idx) => (
            <InnovativeFeature key={idx} {...props} />
          ))}
        </div>
        
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>Intergration and FAQ</h2>
          </div>
        </div>
        <div className="row">
          {IntegrationFeatures.map((props, idx) => (
            <AdditionalFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}