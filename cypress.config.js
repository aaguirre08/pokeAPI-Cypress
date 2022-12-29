const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "23w41t",
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false
  }
});
