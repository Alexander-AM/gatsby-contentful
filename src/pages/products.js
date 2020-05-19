import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'

import styles from './products.module.css'

class ProductsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allContentfulProduct.nodes')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h1 className={styles.pageTitle}>Products</h1>
          {products.map((product) => {
            return <ProductCard key={product.sku} {...product} />
          })}
        </div>
      </Layout>
    )
  }
}

export default ProductsIndex

export const productQuery = graphql`
  query ProductsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      nodes {
        id
        name
        price
        sku
        slug
        stock
        category
        discount
        image {
          fluid {
            src
          }
        }
        description {
          description
        }
      }
    }
  }
`
