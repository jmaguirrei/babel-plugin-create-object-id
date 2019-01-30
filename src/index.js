

module.exports = function ({ types }) {

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
        }
      });
    }

  };

  return {
    visitor,
  };

};

// module.exports = function (babel) {

//   let sequential = 1000;
//   const { ObjectProperty, Identifier, NumericLiteral } = babel.types;

//   const visitor = {

//     ObjectExpression({ node }) {

//       node.properties.forEach(property => {
//         if (property.key && property.key.name === 'render') {
//           node.properties.push(
//             ObjectProperty(Identifier('id'), NumericLiteral(sequential))
//           );
//           sequential++;
//         }
//       });
//     }

//   };

//   return {
//     visitor,
//   };

// };
