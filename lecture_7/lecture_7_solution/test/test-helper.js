const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

global.chai = require('chai');
global.expect = global.chai.expect;
global.sinon = require('sinon');

const sinonChai = require('sinon-chai');
global.chai.use(sinonChai);
