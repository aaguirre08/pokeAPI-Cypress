const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://pokeapi.co/api/v2',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false
  }
});
