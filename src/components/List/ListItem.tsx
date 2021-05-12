import React, { useCallback } from 'react';
import { IForecast } from '../../models';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import styles from './styles.module.scss';
import { setActiveItem } from '../../store/forecastsReducer';

type ListItemProps = {
  item: IForecast
}

const ListItem = ({item} : ListItemProps) => {
  const activeItem = useSelector((state: RootState) => state.forecast.activeItem);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(setActiveItem(item.id))
  }, [item.id]);
  
  
  const listItemClass = classNames(
    styles['list-item'],
    {
      [styles.active]: activeItem && activeItem.id === item.id
    }
  )

  return  (
    <div className={listItemClass} onClick={handleClick}>
      <div className={styles["list-item__title"]}>
        {item.title}
      </div>
      <div className={styles["list-item__desciption"]}>
        {item.desciption}
      </div>
    </div>
  )
}

export default ListItem