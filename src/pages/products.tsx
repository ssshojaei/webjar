import Breadcrumbs from 'components/Breadcrumbs'
import Layout from 'components/Layout'
import React from 'react'

const links = [
  {
    link: '/pages',
    label: 'صفحه‌ها',
  },
  {
    label: 'محصولات',
  },
]

const products = () => {
  return (
    <Layout>
      <Breadcrumbs pages={links} />
      <h1>products</h1>
    </Layout>
  )
}

export default products
