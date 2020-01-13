'use strict';

module.exports = app => {
  if (app.config.promiseFtp) require('./lib/ftp')(app);
};
