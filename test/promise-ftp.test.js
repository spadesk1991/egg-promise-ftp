'use strict';

const mock = require('egg-mock');

describe('test/promise-ftp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/promise-ftp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, promiseFtp')
      .expect(200);
  });
});
