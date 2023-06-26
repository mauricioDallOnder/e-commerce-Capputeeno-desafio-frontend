import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
  component: {
    setupNodeEvents(on, config) {},
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
