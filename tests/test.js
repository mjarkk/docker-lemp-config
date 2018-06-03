const { exec } = require('child_process')
const fetch = require('node-fetch')
const fs = require('fs-extra')
const log = console.log

describe('Docker', () => {
  test('Killing old servers', dune => {
    exec('docker-compose kill && docker-compose rm -f', (err, stdout, stderr) => {
      expect(err).toBeNull()
      dune()
    })
  })
  
  test('Starting the server', dune => {
    exec('docker-compose up -d', (err, stdout, stderr) => {
      expect(err).toBeNull()
      dune()
    })
  })
})

describe('Nginx', () => {
  test('Check if webserver works', dune => {
    fetch('http://localhost/')
      .then(res => res.text())
      .then(body => {
        expect(body).not.toBe('')
        dune()
      })
      .catch(err => {
        expect(err).toBeNull()
        dune()
      })
  })
})

describe('PHP', () => {
  test('Access PHP file', dune => {
    fs.copySync('./tests/test.php', './html/jestPhpTestFile.php')
    fetch('http://localhost/jestPhpTestFile.php?clean=TRUE')
      .then(res => res.text())
      .then(body => {
        expect(body).toBe('TRUE')
        dune()
      })
      .catch(err => {
        expect(err).toBeNull()
        dune()
      })
  })
  test('')
})
