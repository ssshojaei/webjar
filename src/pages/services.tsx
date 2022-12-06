import Breadcrumbs from 'components/Breadcrumbs'
import Layout from 'components/Layout'
import React from 'react'

const links = [
  {
    link: '/pages',
    label: 'صفحه‌ها',
  },
  {
    label: 'خدمات',
  },
]

const services = () => {
  return (
    <Layout>
      <Breadcrumbs pages={links} />
      <h1>services</h1>
    </Layout>
  )
}

export default services
