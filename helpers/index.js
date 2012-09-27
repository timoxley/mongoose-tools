'use strict'

var async = require('async')
var _ = require('underscore')

var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId

module.exports.dropCollections = function(callback) {
  var collections = _.keys(mongoose.connection.collections)
  async.forEach(collections, function(collectionName, done) {
    var collection = mongoose.connection.collections[collectionName]
    collection.drop(function(err) {
      if (err && err.message != 'ns not found') done(err)
      done(null)
    })
  }, callback)
}

module.exports.isObjectId = function(id) {
  if (!id) return false
  if (typeof id === 'object') {
    id = id.toString()
  }
  if (typeof id === 'string') {
    try {
      new ObjectId(id)
    } catch(e) {
      return false
    }
    return true
  }
  return false
}
