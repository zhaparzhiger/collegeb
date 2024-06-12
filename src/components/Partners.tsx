import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import fr from '../../public/partners/fr.svg'
import sec from '../../public/partners/sec.svg'
import third from '../../public/partners/third.svg'
import four from '../../public/partners/four.svg'
import fifth from '../../public/partners/fifth.svg'
import six from '../../public/partners/six.svg'
import seven from '../../public/partners/sev.svg'
import eig from '../../public/partners/eig.svg'
const Pagemain = () => {
  return (
    <section className={styles['partners']}>
    <div className={`${styles['partners__container']} _container`}>
      <div className={styles['partners__header']}>
        Наши партнеры
      </div>
      <div className={styles['partners__row']}>
        <div className={styles['partners__colone']}>
          <div className={styles['partners__col']}>
            <Image src={fr} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={sec} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={third} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={four} alt=""/>
          </div>
        </div>
        <div className={styles['partners__col2']}>
          <div className={styles['partners__col']}>
            <Image src={fifth} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={six} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={seven} alt=""/>
          </div>
          <div className={styles['partners__col']}>
            <Image src={eig} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pagemain
