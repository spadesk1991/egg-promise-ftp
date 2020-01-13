'use strict';
const PromiseFtp = require('promise-ftp');

module.exports = app => {
  const ftp = new PromiseFtp();
  const opt = app.config.promiseFtp;
  ftp.connect(opt);
  app.ftp = ftp;
};
