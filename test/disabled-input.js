import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <iron-input bind-value="{{myValue}}" invalid="{{myInvalid}}" id="input">
      <input disabled="">
    </iron-input>
`,

  is: 'disabled-input',

  properties: {
    myValue: {
      value: 'foo'
    },

    myInvalid: {
      value: false
    }
  }
});
