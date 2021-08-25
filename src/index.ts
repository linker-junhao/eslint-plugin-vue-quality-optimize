/**
 * @fileoverview require id attr for specific element
 * @author Linker
 */


//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
import parser from 'vue-eslint-parser';
import vifConditionRepeatedTrim from './rules/vif-condition-repeated-trim';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
export default {
  configs: {
    recommended: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      env: {
        browser: true,
        es6: true
      },
      plugins: ['@int-component/vue-require-id-attr'],
      rules: {
        '@int-component/vue-quality-optimize/vif-condition-repeated-trim': [2]
      }
    }
  },
  rules: {
    'vif-condition-repeated-trim': vifConditionRepeatedTrim
  }
};
