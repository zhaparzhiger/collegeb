import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import yellowarrrow from '../../public/page-main/yellow-arrow.svg'

const Pagemain = () => {
  return (
    <section className={styles.news}>
        <div className={`${styles['news__container']} ${styles._container}`}>
          <div className={styles['news__content']}>
            <div className={styles['news__latest']}>
              <div className={styles['news__title']}>Новости</div>
              <div className={styles['news__sub-title']}>Последние и актуальные новости нашего колледжа</div>
            </div>
            <a className={`${styles['news__moreinfo']} ${styles['moreinfo-block__yellowlink']}`} href="#">Посмотреть больше<Image src={yellowarrrow} alt=""/></a>
          </div>
          <div className={styles['news__row']}>
            <div className={styles['news__column']}>
              <div className={styles['news__date']}>12 февраля</div>
              <div className={styles['news__desc']}>очень важная новость (очень важная)</div>
            </div>
            <div className={styles['news__column']}>
              <div className={styles['news__date']}>12 февраля</div>
              <div className={styles['news__desc']}>очень важная новость (очень важная)</div>
            </div>
            <div className={styles['news__column']}>
              <div className={styles['news__date']}>12 февраля</div>
              <div className={styles['news__desc']}>очень важная новость (очень важная)</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Pagemain
