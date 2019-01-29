
let sequential = 1000;

const getNode = id => ({

  type: 'ObjectProperty',
  key: {
    type: 'Identifier',
    name: 'id',
  },
  value: {
    type: 'NumericLiteral',
    value: id,
  },
});


module.exports = function (/* babel */) {

  const visitor = {

    ObjectExpression({ node }, { opts = {} }) {
      node.properties.forEach(property => {
        const methodName = opts.methodName || 'render';
        if (property.key && property.key.name === methodName) {
          node.properties.push(getNode(sequential++));
        }
      });
    }

  };

  return {
    visitor,
  };

};
