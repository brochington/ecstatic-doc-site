import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function EcstaticText() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 440 80"
      version="1.1"
      // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    >
      <g fill="currentColor" transform="matrix(1,0,0,1,-1.24452,72.2673)">
        <g>
          <g transform="matrix(100.969,0,0,100.969,0,0)">
            <path
              d="M0.023,-0.057L0.023,-0.045C0.026,-0.032 0.032,-0.019 0.036,-0.013C0.049,0.005 0.06,0.009 0.08,0.005C0.094,-0.002 0.114,-0.015 0.118,-0.032C0.117,-0.054 0.117,-0.156 0.118,-0.178C0.121,-0.187 0.12,-0.212 0.131,-0.216C0.146,-0.215 0.165,-0.206 0.181,-0.209C0.182,-0.209 0.183,-0.21 0.185,-0.211L0.196,-0.22C0.198,-0.221 0.199,-0.222 0.2,-0.222C0.232,-0.241 0.253,-0.245 0.295,-0.26C0.381,-0.29 0.464,-0.316 0.555,-0.304C0.567,-0.303 0.595,-0.287 0.605,-0.292C0.619,-0.297 0.634,-0.31 0.631,-0.326C0.638,-0.35 0.608,-0.37 0.593,-0.38C0.555,-0.392 0.501,-0.386 0.46,-0.386C0.397,-0.384 0.316,-0.353 0.251,-0.336L0.207,-0.336C0.197,-0.336 0.153,-0.332 0.143,-0.329C0.142,-0.336 0.136,-0.348 0.137,-0.354L0.137,-0.361C0.137,-0.374 0.143,-0.436 0.143,-0.45L0.15,-0.456C0.186,-0.488 0.242,-0.5 0.289,-0.519C0.35,-0.54 0.41,-0.541 0.472,-0.538C0.493,-0.541 0.506,-0.51 0.523,-0.5C0.537,-0.496 0.561,-0.502 0.567,-0.513L0.567,-0.576C0.564,-0.593 0.533,-0.613 0.523,-0.621C0.518,-0.621 0.459,-0.634 0.441,-0.633C0.383,-0.632 0.353,-0.619 0.302,-0.608C0.244,-0.588 0.196,-0.565 0.137,-0.564C0.119,-0.561 0.104,-0.566 0.086,-0.57C0.073,-0.565 0.043,-0.561 0.036,-0.545C0.033,-0.522 0.033,-0.495 0.036,-0.475C0.036,-0.469 0.05,-0.436 0.055,-0.431L0.055,-0.336C0.055,-0.333 0.049,-0.313 0.048,-0.31C0.048,-0.304 0.042,-0.264 0.042,-0.254L0.042,-0.235C0.042,-0.232 0.041,-0.225 0.04,-0.215L0.031,-0.147C0.03,-0.137 0.029,-0.13 0.029,-0.127C0.029,-0.117 0.023,-0.069 0.023,-0.057ZM0.136,-0.059C0.134,-0.036 0.165,-0.006 0.188,-0L0.197,-0C0.208,0.003 0.23,-0.01 0.251,-0.013C0.276,-0.023 0.359,-0.033 0.384,-0.038C0.458,-0.042 0.522,-0.056 0.599,-0.057C0.603,-0.06 0.615,-0.072 0.618,-0.076C0.624,-0.096 0.611,-0.115 0.593,-0.121C0.529,-0.133 0.491,-0.136 0.429,-0.133C0.385,-0.129 0.321,-0.13 0.283,-0.121C0.28,-0.119 0.269,-0.12 0.264,-0.12C0.236,-0.12 0.21,-0.127 0.182,-0.127L0.169,-0.127C0.145,-0.111 0.135,-0.089 0.136,-0.059Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,67.1442,0)">
            <path
              d="M0.016,-0.195C0.012,-0.156 0.018,-0.112 0.041,-0.081C0.076,-0.036 0.132,-0.005 0.187,0.013C0.236,0.028 0.283,0.035 0.333,0.044C0.369,0.054 0.397,0.061 0.434,0.057C0.453,0.051 0.48,0.032 0.485,0.013C0.487,0.004 0.474,-0.017 0.466,-0.024L0.345,-0.05C0.294,-0.059 0.241,-0.067 0.192,-0.086C0.165,-0.096 0.143,-0.115 0.124,-0.138C0.1,-0.15 0.118,-0.195 0.117,-0.208C0.147,-0.25 0.179,-0.296 0.231,-0.309C0.256,-0.31 0.279,-0.314 0.302,-0.299C0.313,-0.293 0.328,-0.253 0.333,-0.24C0.341,-0.218 0.366,-0.228 0.383,-0.227C0.395,-0.228 0.404,-0.243 0.409,-0.252C0.411,-0.284 0.41,-0.32 0.39,-0.347C0.361,-0.376 0.327,-0.413 0.282,-0.411C0.217,-0.423 0.149,-0.391 0.105,-0.341C0.053,-0.297 0.026,-0.26 0.016,-0.195Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,117.831,0)">
            <path
              d="M0.066,-0.07C0.062,-0.042 0.065,-0.007 0.097,0.005C0.152,0.048 0.236,0.071 0.301,0.068C0.365,0.066 0.445,0.065 0.496,0.024C0.571,-0.036 0.498,-0.122 0.439,-0.159C0.354,-0.208 0.263,-0.235 0.18,-0.292C0.155,-0.301 0.172,-0.322 0.187,-0.327C0.243,-0.36 0.31,-0.358 0.376,-0.361C0.395,-0.378 0.399,-0.394 0.395,-0.418C0.381,-0.453 0.355,-0.452 0.319,-0.455C0.26,-0.451 0.197,-0.434 0.142,-0.412C0.115,-0.395 0.082,-0.391 0.053,-0.38C0.031,-0.363 0.014,-0.341 0.015,-0.311C0.019,-0.283 0.043,-0.274 0.059,-0.254C0.11,-0.215 0.174,-0.184 0.237,-0.165C0.261,-0.151 0.388,-0.093 0.42,-0.07C0.43,-0.06 0.428,-0.045 0.414,-0.039C0.406,-0.036 0.364,-0.026 0.357,-0.026C0.294,-0.027 0.226,-0.017 0.173,-0.058C0.147,-0.083 0.119,-0.096 0.085,-0.102C0.08,-0.091 0.072,-0.081 0.066,-0.07Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,172.657,0)">
            <path
              d="M0.198,-0.039C0.212,-0.017 0.219,0.008 0.249,0.011C0.249,0.011 0.256,0.012 0.259,0.012C0.27,0.014 0.278,0.001 0.286,-0.007C0.295,-0.021 0.315,-0.042 0.313,-0.054C0.309,-0.08 0.288,-0.108 0.286,-0.134C0.275,-0.178 0.282,-0.216 0.28,-0.26L0.286,-0.267C0.303,-0.273 0.324,-0.279 0.344,-0.281L0.346,-0.282C0.399,-0.294 0.481,-0.312 0.533,-0.317C0.544,-0.32 0.551,-0.328 0.559,-0.336C0.565,-0.362 0.556,-0.383 0.527,-0.387L0.481,-0.387C0.422,-0.393 0.357,-0.374 0.299,-0.368C0.296,-0.368 0.283,-0.373 0.28,-0.374C0.268,-0.386 0.274,-0.458 0.267,-0.475C0.265,-0.494 0.25,-0.516 0.236,-0.526C0.212,-0.53 0.196,-0.527 0.179,-0.507L0.179,-0.349L0.173,-0.342C0.12,-0.331 0.048,-0.319 -0.01,-0.317L-0.042,-0.286C-0.051,-0.275 -0.051,-0.245 -0.045,-0.231C-0.031,-0.22 -0.02,-0.202 -0.004,-0.197C0.018,-0.193 0.031,-0.208 0.052,-0.21C0.083,-0.226 0.138,-0.233 0.179,-0.235C0.187,-0.231 0.19,-0.217 0.192,-0.21C0.192,-0.198 0.198,-0.136 0.198,-0.121L0.198,-0.039Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,226.271,0)">
            <path
              d="M0.408,-0.144C0.447,-0.102 0.486,-0.047 0.528,-0.011L0.532,-0.009C0.56,0.006 0.574,0.02 0.604,0.013C0.619,0.009 0.639,0.002 0.648,-0.011C0.65,-0.018 0.657,-0.03 0.655,-0.037C0.652,-0.04 0.645,-0.048 0.642,-0.049C0.62,-0.052 0.61,-0.069 0.585,-0.087C0.577,-0.097 0.542,-0.122 0.534,-0.132C0.504,-0.181 0.473,-0.241 0.446,-0.296C0.438,-0.308 0.422,-0.315 0.408,-0.321C0.405,-0.324 0.396,-0.331 0.395,-0.334C0.403,-0.353 0.375,-0.358 0.364,-0.366C0.334,-0.369 0.301,-0.374 0.269,-0.374C0.228,-0.374 0.188,-0.367 0.155,-0.34C0.099,-0.293 0.025,-0.236 0.022,-0.157C0.011,-0.112 0.035,-0.076 0.06,-0.037C0.086,-0.006 0.135,0.012 0.176,0.007C0.264,0.008 0.334,-0.059 0.389,-0.119C0.393,-0.126 0.401,-0.139 0.408,-0.144ZM0.117,-0.113C0.106,-0.133 0.096,-0.157 0.111,-0.176C0.145,-0.224 0.186,-0.282 0.243,-0.29C0.283,-0.299 0.319,-0.295 0.358,-0.304C0.359,-0.291 0.352,-0.264 0.351,-0.252C0.347,-0.218 0.326,-0.183 0.307,-0.157C0.279,-0.126 0.263,-0.111 0.218,-0.094C0.203,-0.09 0.187,-0.086 0.171,-0.086C0.15,-0.086 0.13,-0.093 0.117,-0.113Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,289.78,0)">
            <path
              d="M0.198,-0.039C0.212,-0.017 0.219,0.008 0.249,0.011C0.249,0.011 0.256,0.012 0.259,0.012C0.27,0.014 0.278,0.001 0.286,-0.007C0.295,-0.021 0.315,-0.042 0.313,-0.054C0.309,-0.08 0.288,-0.108 0.286,-0.134C0.275,-0.178 0.282,-0.216 0.28,-0.26L0.286,-0.267C0.303,-0.273 0.324,-0.279 0.344,-0.281L0.346,-0.282C0.399,-0.294 0.481,-0.312 0.533,-0.317C0.544,-0.32 0.551,-0.328 0.559,-0.336C0.565,-0.362 0.556,-0.383 0.527,-0.387L0.481,-0.387C0.422,-0.393 0.357,-0.374 0.299,-0.368C0.296,-0.368 0.283,-0.373 0.28,-0.374C0.268,-0.386 0.274,-0.458 0.267,-0.475C0.265,-0.494 0.25,-0.516 0.236,-0.526C0.212,-0.53 0.196,-0.527 0.179,-0.507L0.179,-0.349L0.173,-0.342C0.12,-0.331 0.048,-0.319 -0.01,-0.317L-0.042,-0.286C-0.051,-0.275 -0.051,-0.245 -0.045,-0.231C-0.031,-0.22 -0.02,-0.202 -0.004,-0.197C0.018,-0.193 0.031,-0.208 0.052,-0.21C0.083,-0.226 0.138,-0.233 0.179,-0.235C0.187,-0.231 0.19,-0.217 0.192,-0.21C0.192,-0.198 0.198,-0.136 0.198,-0.121L0.198,-0.039Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,343.395,0)">
            <path
              d="M0.014,-0.557C0.002,-0.534 0.011,-0.506 0.033,-0.493C0.064,-0.479 0.107,-0.449 0.144,-0.455L0.166,-0.455C0.178,-0.465 0.175,-0.488 0.166,-0.5C0.164,-0.502 0.13,-0.539 0.128,-0.544C0.113,-0.564 0.095,-0.593 0.068,-0.589C0.046,-0.591 0.022,-0.578 0.014,-0.557ZM0.078,-0.05C0.08,-0.037 0.092,-0.015 0.097,-0.006C0.109,0.006 0.124,0.009 0.141,0.006C0.155,-0.002 0.156,-0.023 0.16,-0.037C0.16,-0.042 0.167,-0.095 0.166,-0.113C0.153,-0.17 0.136,-0.217 0.135,-0.278C0.13,-0.29 0.121,-0.31 0.109,-0.316C0.089,-0.32 0.069,-0.314 0.059,-0.297C0.058,-0.279 0.058,-0.256 0.059,-0.24C0.062,-0.212 0.073,-0.077 0.078,-0.05Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,365.507,0)">
            <path
              d="M0.016,-0.195C0.012,-0.156 0.018,-0.112 0.041,-0.081C0.076,-0.036 0.132,-0.005 0.187,0.013C0.236,0.028 0.283,0.035 0.333,0.044C0.369,0.054 0.397,0.061 0.434,0.057C0.453,0.051 0.48,0.032 0.485,0.013C0.487,0.004 0.474,-0.017 0.466,-0.024L0.345,-0.05C0.294,-0.059 0.241,-0.067 0.192,-0.086C0.165,-0.096 0.143,-0.115 0.124,-0.138C0.1,-0.15 0.118,-0.195 0.117,-0.208C0.147,-0.25 0.179,-0.296 0.231,-0.309C0.256,-0.31 0.279,-0.314 0.302,-0.299C0.313,-0.293 0.328,-0.253 0.333,-0.24C0.341,-0.218 0.366,-0.228 0.383,-0.227C0.395,-0.228 0.404,-0.243 0.409,-0.252C0.411,-0.284 0.41,-0.32 0.39,-0.347C0.361,-0.376 0.327,-0.413 0.282,-0.411C0.217,-0.423 0.149,-0.391 0.105,-0.341C0.053,-0.297 0.026,-0.26 0.016,-0.195Z"
              // style="fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(100.969,0,0,100.969,411.953,0)">
            <path
              d="M0.126,-0.135C0.175,-0.125 0.185,-0.211 0.189,-0.221L0.193,-0.263C0.214,-0.337 0.247,-0.499 0.267,-0.567C0.266,-0.603 0.292,-0.645 0.29,-0.679C0.283,-0.694 0.275,-0.717 0.256,-0.715C0.228,-0.72 0.22,-0.699 0.215,-0.671C0.208,-0.656 0.191,-0.588 0.187,-0.576C0.171,-0.491 0.149,-0.477 0.138,-0.398C0.12,-0.336 0.107,-0.273 0.095,-0.199C0.093,-0.186 0.104,-0.139 0.126,-0.135ZM0.112,-0.059C0.07,-0.057 0.055,-0.026 0.065,0.013C0.067,0.03 0.076,0.059 0.097,0.066C0.102,0.069 0.107,0.071 0.112,0.071C0.145,0.071 0.153,-0.011 0.15,-0.014L0.151,-0.017C0.152,-0.027 0.146,-0.058 0.112,-0.059Z"
              // style="fill-rule:nonzero;"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

// const features = [
//   {
//     title: 'Easy to Use',
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({ imageUrl, title, description }) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

const featureRows = [
  {
    idx: 0,
    key: 'flexible',
    heading: 'Flexible',
    content: `The ECS pattern can be a lot to take in when you are getting started. 
    Ecstatic provides a simple and well thought out API that's understandable.
    Components are just Classes. Systems are just Functions. No need to define
    separate Queries ahead of time.`,
    imgUrl: 'img/Count.js.png',
  },
  {
    idx: 1,
    key: 'lifecycle-methods',
    heading: 'Lifecycle Methods',
    content: `Ecstatic provides multiple ways to monitor and react to changes.
    Both Entities and Components may be given Lifecycle methods.`,
    imgUrl: 'img/Lifecycles.js.png',
  },
  {
    idx: 2,
    key: 'typescript',
    heading: 'Type Safe',
    content: `Ecstatic is fully written in Typescript, and care has been made to
    provide an amazing type experience throughout. `,
    imgUrl: 'img/Typescript.ts.png',
  },
];

function FeatureRow(props) {
  const { heading, content, imgUrl, idx } = props;

  return (
    <div
      className={clsx(styles.featureRow, { [styles.reverse]: idx % 2 === 0 })}
    >
      <div className={styles.featureRowDescription}>
        <h2>{heading}</h2>
        <div>{content}</div>
      </div>
      <div className={styles.featureRowImg}>
        <img src={imgUrl} />
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <div style={{ maxWidth: '80%', margin: 'auto'}}>
              <EcstaticText />
            </div>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting_started/what-is-ecs')}
            >
              Get Started
            </Link>
            <a
              href="https://brochington.github.io/ecstatic/"
              target="_blank"
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              style={{ marginLeft: '16px' }}
            >
              API Docs
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <p className={styles.para}>
            ECS is a common and popular way to structure code in the video game
            industry, but not so much in Javascript. That's a shame, because
            it's pretty cool pattern! Ecstatic is built to explore the ECS
            pattern in Javascript.
          </p>
          {featureRows.map((fr) => (
            <FeatureRow {...fr} />
          ))}
        </div>
        {/* <h3>
          ECS is a common way to structure code in the videogames industry, but
          not so much in Javascript. That's a shame, as it's pretty cool
          pattern! Ecstatic is built to explore the ECS pattern in Javascript.
        </h3> */}
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

export default Home;

// {/* <h3>ECS is a common way to structure code in the videogames industry, but not so much in Javascript. That's a shame, as it's pretty cool pattern!
//  Ecstatic is built to explore the ECS pattern in Javascript.</h3> */}
//         {/* {features && features.length > 0 && (
//           <section className={styles.features}>
//             <div className="container">
//               <div className="row">
//                 {features.map((props, idx) => (
//                   <Feature key={idx} {...props} />
//                 ))}
//               </div>
//             </div>
//           </section>
//         )} */
