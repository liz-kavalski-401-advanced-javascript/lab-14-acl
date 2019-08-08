'use strict';

const fs = require('fs');

require('./events.js')
require('./error.js')
require('./logger.js')

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { events.emit(err) }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { events.emit(err) }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
