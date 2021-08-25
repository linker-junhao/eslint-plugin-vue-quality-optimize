import { Rule } from 'eslint'
import utils from 'eslint-plugin-vue/lib/utils'
import { Node, SourceLocation } from 'estree'

const countMap = new Map()
const conditionExpressCount = (express: string) => {
  countMap.set(express, (countMap.get(express) || 0) + 1)
}

const vifConditionRepeatedTrim = (context: Rule.RuleContext) => {
  const visitorNamePattern = 'VExpressionContainer[parent.type=VAttribute&&parent.type&&parent.directive&&parent.key.type=VDirectiveKey&&parent.key.name.type=VIdentifier&&parent.key.name.name=if]'
  return utils.defineTemplateBodyVisitor(context, {
    [visitorNamePattern]: (node: Node) => {
      context.report({
        node,
        loc: node.loc as SourceLocation,
        message: 'repeated vif condition should collect to computed option',
        fix(fixer) {
          return fixer.replaceText(node, '')
        }
      })
    }
  })
}

const theRule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'auto trim repeated condition and collect it to computed option',
      suggestion: true
    },
    fixable: 'code',
    schema: [
      {
        type: 'array'
      }
    ]
  },
  create: vifConditionRepeatedTrim
}

export default theRule
