const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  pageLoadTimeout: 800000,
  defaultCommandTimeout: 20000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  reporter: "cypress-mochawesome-reporter",
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Saucedemo Report",
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
      
    },
  },
});
