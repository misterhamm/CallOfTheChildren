<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Call Of The Children',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <h1>Call Of The Children</h1>
    <img
      src="@assets/images/logo.png"
      alt="Logo"
    >
  </Layout>
</template>
