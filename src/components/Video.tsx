import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
const Pagemain = () => {
  return (
    <section className={`${styles['bigimg-block']} ${styles._container}`}>
    <video className={styles['bigimg-block__elbasy']} autoPlay loop muted playsInline>
      <source src="/video.mp4" type="video/mp4"/>
      Ваш браузер не поддерживает видео тег.
    </video>
  </section>
  )
}

export default Pagemain
