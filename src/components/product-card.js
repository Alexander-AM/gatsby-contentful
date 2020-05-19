import React from 'react'
import { Link } from 'gatsby'
import styles from './product-card.module.css'

function ProductCard({ name, category, price, discount, slug }) {
  return (
    <article className={styles.productCard}>
      <h1>
        <Link to={`/${slug}`}>{name}</Link>
      </h1>
      <p>
        DKK{' '}
        <span className={discount ? styles.strokedPrice : styles.primaryPrice}>
          {price}
        </span>
      </p>
      {discount ? (
        <p className={styles.primaryPrice}>
          DKK <span>{discount}</span>
        </p>
      ) : null}
    </article>
  )
}

export default ProductCard
