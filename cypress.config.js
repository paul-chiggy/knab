const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    /* eslint-disable */
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });
      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
    /* eslint-disable */
    specPattern: "**/*.feature",
    viewportHeight: 1920,
    viewportWidth: 3072,
    supportFile: "cypress/support/e2e.js"
  },
  component: {

  }
});
