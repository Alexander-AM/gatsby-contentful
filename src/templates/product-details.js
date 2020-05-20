import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './product-details.module.css'

class ProductDetailsTemplate extends React.Component {
  render() {
    const product = get(this, 'props.data.contentfulProduct')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <h1>{product.name}</h1>
          {product.image.map((img) => {
            return <Img fluid={img.fluid} />
          })}
          {
            JSON.parse(product.description.description).content[0].content[0]
              .value
          }

          <p>
            DKK{' '}
            <span
              className={
                product.discount ? styles.strokedPrice : styles.primaryPrice
              }
            >
              {product.price}
            </span>
          </p>
          {product.discount ? (
            <p className={styles.primaryPrice}>
              DKK <span>{product.discount}</span>
            </p>
          ) : null}
        </div>
      </Layout>
    )
  }
}

export default ProductDetailsTemplate

export const productQuerySingle = graphql`
  query ProductQuerySingle($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      name
      category {
        name
      }
      price
      discount
      slug
      stock
      image {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description {
        description
      }
      sku
    }
  }
`
