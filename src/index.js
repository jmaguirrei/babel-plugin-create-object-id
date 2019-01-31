
module.exports = function ({ types }) {

  let sequential = 1000;

  const visitor = {
    ObjectExpression(path) {

      path.node.properties.forEach(property => {
        if (property.key && property.key.name === 'render') {
          path.node.properties.push(
            types.ObjectProperty(
              types.Identifier('id'),
              types.NumericLiteral(sequential),
            )
          );
          path.node.properties.push(
            types.ObjectProperty(
              types.Identifier('scope'),
              types.NumericLiteral(path.context.scope.uid),
            )
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


