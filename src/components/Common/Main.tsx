import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '../List/List';
import Detail from '../Detail/Detail';
import Header from './Header';
import { getAllForecasts } from '../../store/forecastsReducer';
import { useAppDispatch, RootState } from '../../store';
import styles from './styles.module.scss';

const Main = () => {
  const forecast = useSelector((state: RootState) => state.forecast.activeItem);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllForecasts(null));
  }, [])
  

  return(
    <>
      <Header />
      <div className={styles.container}>
        <List />
        {forecast && <Detail forecast={forecast}/>}
      </div>
    </>
  )
}

export default Main;