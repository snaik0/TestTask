import { defineConfig } from 'cypress'

let e2e = {
  // We've imported your old cypress plugins here.
  // You may want to clean this up later by importing these.
  setupNodeEvents(on: any, config: any) {
    return require('./cypress/plugins/index.js')(on, config)
  },
  baseUrl: '',
  specPattern: ["**/Test.feature"]
}
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
  },
  defaultCommandTimeout: 10000,
  taskTimeout: 120000,
  video: false,
  viewportWidth: 1536,
  viewportHeight: 960,
  e2e: { ...e2e },
})
