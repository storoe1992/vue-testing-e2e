module.exports = {
    'test h1 has green color': browser => {
      browser
        .init()
        .waitForElementVisible('#app')
        .assert.cssProperty('h1','background-color','rgba(0, 128, 0, 1)') // green
        .end()
    }
  }