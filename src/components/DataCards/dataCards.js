import React from 'react';
import styles from './cards.less'

const DataCards = ({titie}) => (
    <div className={styles.cardWrapper}>
      <img/>
      <h1>{titie}</h1>
    </div>
  )

export default DataCards
