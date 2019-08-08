'use strict'

const events = require('./events.js');

events.on('err', payload => {
    console.log('Something is worng')
});


