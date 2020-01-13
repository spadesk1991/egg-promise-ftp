'use strict';

module.exports = agent => {
  if (agent.config.promiseFtp) require('./lib/ftp')(agent);
};
