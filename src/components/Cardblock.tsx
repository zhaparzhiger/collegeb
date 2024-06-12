import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import map from '../../public/cardblock/map.svg'
const Pagemain = () => {
  return (
    <section className={styles['card-block']}>
    <div className={`${styles['card-block__container']} ${styles._container}`}>
      <div className={styles['card-block__body']}>
        <div className={`${styles['card-block__column']} ${styles['card-block__column_blue']}`}>
          <div className={styles['card-block__item']}>
            <div className={`${styles['card-block__title']} ${styles['card-block__title_blue']}`}>
              Контакты
            </div>
            <div className={styles['card-block__contacts contacts-block']}>
              <div className={styles['contacts-block__text']}>Телефон: <span>+7 777 777 7777</span></div>
              <div className={styles['contacts-block__email']}>Email: <span>kit@pbk.kz</span></div>
              <div className={styles['contacts-block__address']}>Адрес: <span>ул. Лермонтова 93</span></div>
            </div>
          </div>
        </div>
        <Image className={styles['card-block__mapimg']} src={map} alt="Карта"/>
        <div className={`${styles['card-block__column']} ${styles['card-block__column_violet']}`}>
          <div className={styles['card-block__item']}>
            <div className={`${styles['card-block__title']} ${styles['card-block__title_violet']}`}>
              Приемная комиссия
            </div>
            <div className={styles['card-block__contacts contacts-block']}>
              <div className={styles['contacts-block__text']}>Телефон: <span>+7 777 777 7777</span></div>
              <div className={styles['contacts-block__email']}>Email: <span>kit@pbk.kz</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pagemain
