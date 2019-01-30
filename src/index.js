module.exports = function ({ types }) {

  let sequential = 1000;
  let startAt = 1000;
  const visitor = {

    ObjectExpression(path) {

      path.node.properties.forEach(property => {
        if (property.key && property.key.name === 'render') {

          const uid = path.scope.generateUidIdentifier('').name;
          const id = Number(uid.substr(1)) + startAt;
          path.node.properties.push(
            types.ObjectProperty(
              types.Identifier('id'),
              types.NumericLiteral(id),
            )
          );
          path.node.properties.push(
            types.ObjectProperty(
              types.Identifier('scope'),
              types.NumericLiteral(path.context.scope.uid),
            )
          );

          path.node.properties.push(
            types.ObjectProperty(
              types.Identifier('sequential'),
              types.NumericLiteral(sequential++),
            )
          );
        }
      });
    }

  };

  return {
    visitor,
  };

};


