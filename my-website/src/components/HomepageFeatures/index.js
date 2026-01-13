import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MotionCaptureProducts = [
  {
    title: translate({id: 'homepage.mono.title', message: 'Dollars MONO'}),
    link: '/category/dollars-mono',
    Svg: '/img/motion-capture.png',
    description1: translate({id: 'homepage.mono.desc1', message: 'Using a single camera or video file,'}),
    description2: translate({id: 'homepage.mono.desc2', message: 'to capture expressions, gestures, and full-body movements in real-time!'}),
  },
  {
    title: translate({id: 'homepage.deep.title', message: 'Dollars DEEP'}),
    link: '/category/dollars-deep',
    Svg: '/img/kinect.png',
    description1: translate({id: 'homepage.deep.desc1', message: 'Based on Dollars MONO, Dollars DEEP can achieve enhanced hip and feet tracking'}),
    description2: translate({id: 'homepage.deep.desc2', message: 'by using a depth camera'}),
  },
  {
    title: translate({id: 'homepage.viva.title', message: 'Dollars VIVA'}),
    link: '/category/dollars-viva',
    Svg: '/img/motion-capture-viva.png',
    description1: translate({id: 'homepage.viva.desc1', message: 'Using HTC Vive and compatible hardwares,'}),
    description2: translate({id: 'homepage.viva.desc2', message: 'to offer low-cost, high-quality full-body motion capture'}),
  },
  {
    title: translate({id: 'homepage.saya.title', message: 'Dollars SAYA'}),
    link: '/category/dollars-saya',
    Svg: '/img/selfie.png',
    description1: translate({id: 'homepage.saya.desc1', message: 'Use a single iOS device to'}),
    description2: translate({id: 'homepage.saya.desc2', message: 'to capture face, hands, and upper body.'}),
  },
];

const FacialCaptureProducts = [
  {
    title: translate({id: 'homepage.egao.title', message: 'Dollars EGAO'}),
    link: '/category/dollars-egao',
    Svg: '/img/face-scan.png',
    description1: translate({id: 'homepage.egao.desc1', message: 'A completely free facial capture software,'}),
    description2: translate({id: 'homepage.egao.desc2', message: 'supporting VMC protocol, Unity, Unreal Engine, iClone8, and Virt-A-Mate'}),
  },
  {
    title: translate({id: 'homepage.nvis.title', message: 'Dollars NVIS'}),
    link: '/category/dollars-nvis',
    Svg: '/img/nvis.png',
    description1: translate({id: 'homepage.nvis.desc1', message: 'Powered by NVIDIA,'}),
    description2: translate({id: 'homepage.nvis.desc2', message: 'delivering facial capture close to an iPhone'}),
  },
  {
    title: translate({id: 'homepage.link.title', message: 'Dollars LINK'}),
    link: '/category/dollars-link',
    Svg: '/img/link.png',
    description1: translate({id: 'homepage.link.desc1', message: 'Use Live Link Face'}),
    description2: translate({id: 'homepage.link.desc2', message: 'for facial capture in iClone8'}),
  },
];

const InnovativeProducts = [
  {
    title: translate({id: 'homepage.mots.title', message: 'Dollars MOTS'}),
    link: '/category/dollars-mots',
    Svg: '/img/T2M.png',
    description1: translate({id: 'homepage.mots.desc1', message: 'Generate full-body motions based on text!'}),
    description2: '',
  },
  {
    title: translate({id: 'homepage.soma.title', message: 'Dollars SOMA'}),
    link: '/category/dollars-soma',
    Svg: '/img/victory.png',
    description1: translate({id: 'homepage.soma.desc1', message: 'Camera-based Body and Hand Gesture Recognition'}),
    description2: '',
  },
];

const IntegrationFeatures = [
  {
    title: translate({id: 'homepage.integration.title', message: 'Integration with Game Engines and DCC Software'}),
    link: '/category/integration',
    Svg: '/img/digital-platform.png',
    description1: translate({id: 'homepage.integration.desc1', message: "Use Dollars MoCap's data streaming and"}),
    description2: translate({id: 'homepage.integration.desc2', message: 'BVH files in game engines and 3D software'}),
  },
  {
    title: translate({id: 'homepage.faq.title', message: 'FAQ'}),
    link: '/faq',
    Svg: '/img/faq.png',
    description1: translate({id: 'homepage.faq.desc1', message: 'Common questions about'}),
    description2: translate({id: 'homepage.faq.desc2', message: 'usage and integration'}),
  },
];

function Feature({Svg, title, description1, description2, link}) {
  const imgUrl = useBaseUrl(Svg);
  return (
    <div className={clsx('col col--4')} >
      <Link to={link} style={{ textDecoration: 'none'}}>
          <div className="text--center">
            <img src={imgUrl} alt="alternative text" className={styles.featureSvg} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={{marginTop:'2em'}}>{title}</h3>
            <p>{description1}<br/>{description2}</p>
            <p></p>
          </div>
      </Link>
    </div>
  );
}

// For the second row features, we'll use a wider layout (col--6 instead of col--4)
function AdditionalFeature({Svg, title, description1, description2, link}) {
  const imgUrl = useBaseUrl(Svg);
  return (
    <div className={clsx('col col--6')} >
      <Link to={link} style={{ textDecoration: 'none'}}>
          <div className="text--center">
            <img src={imgUrl} alt="alternative text" className={styles.featureSvg} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={{marginTop:'2em'}}>{title}</h3>
            <p>{description1}<br/>{description2}</p>
            <p></p>
          </div>
      </Link>
    </div>
  );
}

// For the innovative products, we'll use a centered layout
function InnovativeFeature({Svg, title, description1, description2, link}) {
  const imgUrl = useBaseUrl(Svg);
  return (
    <div className={clsx('col col--6 offset-col--3')} >
      <Link to={link} style={{ textDecoration: 'none'}}>
          <div className="text--center">
            <img src={imgUrl} alt="alternative text" className={styles.featureSvg} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={{marginTop:'2em'}}>{title}</h3>
            <p>{description1}<br/>{description2}</p>
            <p></p>
          </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>
              <Translate id="homepage.section.mocap">MoCap Products</Translate>
            </h2>
          </div>
        </div>
        <div className="row">
          {MotionCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>
              <Translate id="homepage.section.facecap">FaceCap Products</Translate>
            </h2>
          </div>
        </div>
        <div className="row">
          {FacialCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>
              <Translate id="homepage.section.interaction">Interaction Products</Translate>
            </h2>
          </div>
        </div>
        <div className="row">
          {InnovativeProducts.map((props, idx) => (
            <InnovativeFeature key={idx} {...props} />
          ))}
        </div>

        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>
              <Translate id="homepage.section.integration">Integration and FAQ</Translate>
            </h2>
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
