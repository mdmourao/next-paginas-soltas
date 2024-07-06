import React from 'react'
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Páginas Soltas</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/municipios">Municipios</Link>
        <Link href="/temperatura">Tempo</Link>
        <Link href="/mapa">Mapa</Link>
        <Link href="/mapaBicis">Bicis</Link>
        <Link href="/graphs">Gráficos</Link>
      </nav>
    </header>
  )
}





