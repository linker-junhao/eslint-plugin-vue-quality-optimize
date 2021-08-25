/**
 * @fileoverview trim the repeated condition to computed option
 * @author Linker
 */


//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
import { RuleTester } from 'eslint';
import rule from './vif-condition-repeated-trim';


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('vif-condition-repeated-trim', rule, {

  valid: [
    // give me some code that won't trigger a warning
    {
      filename: 'test.vue',
      code: '<template></template>'
    }
  ],

  invalid: [
    {
      code: '<div v-if="condA && condB"></div><p v-if="condA && condB"></p>',
      errors: [{
        message: 'Fill me in.',
        type: 'Me too'
      }]
    }
  ]
});
