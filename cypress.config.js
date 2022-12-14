const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    reporter: "junit",
    /* eslint-disable */
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    /* eslint-disable */
    specPattern: "**/*.feature",
    viewportHeight: 1920,
    viewportWidth: 3072,
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    reporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml",
      toConsole: true
    }
  }
});
