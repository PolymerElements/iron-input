import '../../polymer/polymer.js';
import { IronValidatorBehavior } from '../../iron-validator-behavior/iron-validator-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  is: 'cats-only',

  behaviors: [
    IronValidatorBehavior
  ],

  validate: function(value) {
    return value === 'cat'
  }
});
