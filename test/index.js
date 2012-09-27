var assert = require('assert')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-tools')

describe('module', function() {
  it('module is an object', function() {
    assert.ok(typeof require('../index') === 'object')
  })
  it('module exposes correct helper methods', function() {
    var mongooseHelpers = require('../index')
    assert.ok(mongooseHelpers)
    assert.ok(typeof mongooseHelpers.dropCollections === 'function')
  })
  it('module exposes correct plugins', function() {
    var mongooseTools = require('../index')
    assert.ok(mongooseTools.plugins)
    assert.ok(mongooseTools.plugins.timestamps)
    assert.ok(mongooseTools.plugins.filter)
  })
})
