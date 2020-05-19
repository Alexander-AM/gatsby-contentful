import React from 'react'
import Layout from './layout'

import styles from './footer.module.css'

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>Wow. Look. A footer.</p>
      </footer>
    )
  }
}

export default FooterComponent
