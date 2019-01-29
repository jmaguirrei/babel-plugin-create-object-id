
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

    ObjectExpression({ node }) {
      node.properties.forEach(property => {
        if (property.key && property.key.name === 'render') {
          node.properties = [ getNode(sequential++), property ];
        }
      });
    }

  };

  return {
    visitor,
  };

};
