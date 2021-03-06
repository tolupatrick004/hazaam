/**
* Routes Module
*
* Aggregate all route endpoints here, effectively making
* this the entry/bootstrapping point for all routes
*/

const express = require('express');

const router = express.Router();

const fingerprintRoutes = require('./fingerprints');

// create new express instance to mount resource routes
const mount = new express();

module.exports = () => {
  // define default route
  mount.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the Hazaam API' });
  });

  // mount routes for the fingerprint resource
  mount.use('/fingerprints', fingerprintRoutes(router));

  return mount;
};
