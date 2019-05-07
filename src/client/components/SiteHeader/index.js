import React from 'react'

import styles from './site-header.css'

const SiteHeader = () => (
  <header className={styles.root}>
    <h1>
      <div>
        <i className="fas fa-road" />
      </div>

      <div>React Webpack</div>
    </h1>

    <p>by Joseph Morse</p>
  </header>
)

export default SiteHeader
