import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import { RootState } from '../../store';
import styles from './styles.module.scss';

const List = () => {
  const forecasts = useSelector((state: RootState) => state.forecast.items);

  return  (
    <div className={styles.list}>
      <div className={styles["list__title"]}>Current Forecasts:</div>
      {forecasts.map((i) => 
        <ListItem item={i} key={i.id} />
      )}
    </div>
  )
}

export default List