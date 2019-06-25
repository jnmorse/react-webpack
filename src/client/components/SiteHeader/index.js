import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

import styles from './site-header.css';

const SiteHeader = () => (
  <header className={styles.root}>
    <h1>
      <div>
        <FontAwesomeIcon icon={faRoad} size="2x" />
      </div>

      <div>React Webpack</div>
    </h1>

    <p>by Joseph Morse</p>
  </header>
);

export default SiteHeader;
