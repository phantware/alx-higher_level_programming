#!/usr/bin/node

// Write a script that reads and prints the content of a file.

// The first argument is the file path
// The content of the file must be read in utf-8
// If an error occurred during the reading, print the error object

const fs = require('fs')
const FileName = process.argv[2]
fs.readFile(FileName, 'utf8', function (err, line) {
  if (err) {
    console.log(err)
  } else {
    console.log(line)
  }
})
