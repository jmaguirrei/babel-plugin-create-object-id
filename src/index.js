
module.exports = function (babel) {

  let sequential = 1000;
  const { ObjectProperty, Identifier, NumericLiteral } = babel.types;

  const visitor = {

    ObjectExpression({ node }) {

      node.properties.forEach(property => {
        if (property.key && property.key.name === 'render') {
          node.properties.push(
            ObjectProperty(Identifier('id'), NumericLiteral(sequential))
          );
          sequential++;
        }
      });
    }

  };

  return {
    visitor,
  };

};
