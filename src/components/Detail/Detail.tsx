import React from 'react';
import { useSelector } from 'react-redux';
import { IForecast } from '../../models';
import { RootState } from '../../store';
import styles from './styles.module.scss';

type DetailProps = {
  forecast: IForecast
}

const Detail = ({forecast}: DetailProps) => {
  const image = forecast.image && require('../../assets/images/' + forecast.image);

  return(
    <div className={styles.card}>
      <header className={styles["card__head"]}>
        <span className={styles["card__title"]}>{forecast.title}</span>
      </header>
      <div className={styles["card__img"]}>
        {image && <img src={image.default} alt={forecast.title} />}
      </div>
      <div className={styles["card__desciption"]}>
        {forecast?.desciption}
        <span className={styles["card__date"]}>
          <b>Due date</b>:&nbsp;
          {forecast?.date}
        </span>
      </div>
      <div className={styles["card__text"]} dangerouslySetInnerHTML={{__html: forecast.text}} />
    </div>
  )
}

export default Detail;