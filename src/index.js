/* eslint-env browser */

'use strict';

require('object-iterators'); // Install the Array.find polyfill, as needed

var Hypergrid = require('./Hypergrid');

Hypergrid.behaviors = require('./behaviors/index');
Hypergrid.cellEditors = require('./cellEditors/index');
Hypergrid.features = require('./features/index');

window.fin = {
    Hypergrid: Hypergrid
};