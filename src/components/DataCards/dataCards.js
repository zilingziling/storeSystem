import React from 'react';
import styles from './cards.less';

const DataCards = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.cardWrapper}>
      <img />
      <div>
        <h1>{item.title}</h1>
        <p>{item.value}</p>
      </div>
    </div>
  );
};

export default DataCards;
