import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import code from '../../public/majors/code.svg'
import coin from '../../public/majors/coin.svg'
import gear from '../../public/majors/gear.svg'
import grayarrow from '../../public/majors/grayarrow.svg'
import lock from '../../public/majors/lock.svg'
const Pagemain = () => {
  return (
    <section className={styles.major}>
    <div className={`${styles['major__container']} ${styles._container}`}>
      <div className={styles['major__header']}>
        Наши специальности
      </div>
      <div className={styles['major__row']}>
        <div className={styles['major__column']}>
          <div className={`${styles['major__item']} ${styles['item-major']}`}>
            <div className={styles['item-major__img']}>
              <Image src={gear} alt=""/>
            </div>
            <div className={styles['item-major__desc']}>07130700 - Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования (по видам и отраслям)</div>
            <a className={styles['item-major__moreinfo']} href="#">Подробнее<Image className={styles['rotatebro']} src={grayarrow} alt=""/></a>
          </div>
        </div>
        <div className={styles['major__column']}>
          <div className={`${styles['major__item']} ${styles['item-major']}`}>
            <div className={styles['item-major__img']}>
              <Image src={coin} alt=""/>
            </div>
            <div className={styles['item-major__desc']}>04130100 - Менеджмент (по отраслям и областям применения)</div>
            <a className={styles['item-major__moreinfo']} href="#">Подробнее<Image className={styles['rotatebro']} src={grayarrow} alt=""/></a>
          </div>
        </div>
        <div className={styles['major__column']}>
          <div className={`${styles['major__item']} ${styles['item-major']}`}>
            <div className={styles['item-major__img']}>
              <Image src={code} alt=""/>
            </div>
            <div className={styles['item-major__desc']}>06130100 - Программное обеспечение (по видам)</div>
            <a className={styles['item-major__moreinfo']} href="#">Подробнее<Image className={styles['rotatebro']} src={grayarrow} alt=""/></a>
          </div>
        </div>
        <div className={styles['major__column']}>
          <div className={`${styles['major__item']} ${styles['item-major']}`}>
            <div className={styles['item-major__img']}>
              <Image src={lock} alt=""/>
            </div>
            <div className={styles['item-major__desc']}>06120200 – Системы информационной безопасности</div>
            <a className={styles['item-major__moreinfo']} href="#">Подробнее<Image className={styles['rotatebro']} src={grayarrow} alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pagemain
