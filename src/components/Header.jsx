'use client'
import React from 'react'
import  { useState,useEffect } from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import header_logo from '../../public/header/kit-icon.svg'
import eng from '../../public/header/eng.svg'
import kaz from '../../public/header/kaz.svg'
import ru from '../../public/header/ru.svg'
import arrdown from '../../public/header/arrow-down.svg'
export default function Header() {
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest(`.${styles.header__changelang}`)) {
          setOpen(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    const toggleDropdown = () => {
      setOpen(!open);
    };
  
    const selectLang = (lang) => {
      document.getElementById('selectedLang').textContent = lang;
      setOpen(false);
    };
  
    return (
      <header className={styles.header}>
        <div className={`${styles.header__container} ${styles._container}`}>
          <div className={styles.header__logo}>
            <Image src={header_logo} alt="Logo" />
          </div>
          <nav className={`${styles.header__menu} ${styles['menu-header']}`}>
            <ul className={styles['menu-header__list']}>
              <li className={styles['menu-header__item']}><a className={styles['menu-header__link']} href="#">О нас</a></li>
              <li className={styles['menu-header__item']}><a className={styles['menu-header__link']} href="#">Новости</a></li>
              <li className={styles['menu-header__item']}><a className={styles['menu-header__link']} href="#">Информация</a></li>
              <li className={styles['menu-header__item']}><a className={styles['menu-header__link']} href="#">WorldSkills</a></li>
              <li className={styles['menu-header__item']}><a className={styles['menu-header__link']} href="#">Контакты</a></li>
            </ul>
          </nav>
          <div className={styles['burger-menu']}>
            <div className={styles.burger}></div>
          </div>
          {open && <div className={styles.overlay}></div>}
          <div onClick={toggleDropdown} className={`${styles.header__changelang} ${open ? styles.open : ''}`}>
            <a id="selectedLang" onClick={toggleDropdown}>Ru</a>
            <Image className={styles.header__arrow} src={arrdown} alt="Open Dropdown" onClick={toggleDropdown} />
            {open && (
              <ul className={styles['dropdown-menu']}>
                <li onClick={() => selectLang('Ru')} data-lang="Ru">
                  <Image src={ru} alt="Russian" />Русский
                </li>
                <li onClick={() => selectLang('Kz')} data-lang="Kz">
                  <Image src={kaz} alt="Kazakh" />Қазақ
                </li>
                <li onClick={() => selectLang('En')} data-lang="En">
                  <Image src={eng} alt="English" />English
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.header__line}></div>
      </header>
    );
  }