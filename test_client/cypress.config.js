const { defineConfig } = require("cypress")
module.exports = defineConfig({
    e2e: {
        baseUrl: "https://bug-free-acorn-r56q9wg9rwg25r46-8001.app.github.dev/?api=https://bug-free-acorn-r56q9wg9rwg25r46-8000.app.github.dev",
        supportFile: false,
        specPattern: 'cypress/**/*.cy.js',
        video: true,
        screenshotsFolder: 'reports/screenshots',
        videosFolder: 'reports/videos',
        chromeWebSecurity: false,
        reporter: 'junit',
        reporterOptions: {
            mochaFile: "reports/junit-[hash].xml"
        },
    },
})