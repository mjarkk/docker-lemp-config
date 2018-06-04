const { exec } = require('child_process')
const fetch = require('node-fetch')
const fs = require('fs-extra')
const log = console.log

const cpTestFile = () => 
  fs.copySync('./tests/test.php', './html/jestPhpTestFile.php')
const rmTestFile = () =>
  fs.removeSync('./html/jestPhpTestFile.php')

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
    cpTestFile()
    fetch('http://localhost/jestPhpTestFile.php?clean=TRUE')
      .then(res => res.text())
      .then(body => {
        expect(body).toBe('TRUE')
        rmTestFile()
        dune()
      })
      .catch(err => {
        expect(err).toBeNull()
        rmTestFile()
        dune()
      })
  })
})

describe('SQL', () => {
  test('Access to PHPmyadmin', dune => {
    setTimeout(() => {
      fetch('http://localhost:81/')
        .then(res => res.text())
        .then(body => {
          expect(body).not.toBe('')
          dune()
        })
        .catch(err => {
          expect(err).toBeNull()
          dune()
        })
    }, 2000)
  })
  test('Access SQL server', dune => {
    cpTestFile()
    fetch('http://localhost/jestPhpTestFile.php?sql')
      .then(res => res.text())
      .then(body => {
        expect(body).toBe('TRUE')
        rmTestFile()
        dune()
      })
      .catch(err => {
        expect(err).toBeNull()
        rmTestFile()
        dune()
      })
  })
})

describe('Mail', () => {
  test('Access to MailDev', dune => {
    fetch('http://localhost:82/')
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