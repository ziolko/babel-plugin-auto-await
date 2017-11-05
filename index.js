module.exports = function (babel) {
  var t = babel.types

  var asyncFunctionVisitor = {
    CallExpression: function (path) {
      if (path.parent.type !== 'AwaitExpression') {
        path.replaceWith(t.awaitExpression(path.node))
      }
    },
    Function: function (path) {
      path.skip()
    }
  }

  return {
    visitor: {
      Function: function (path) {
        if (path.node.async) {
          path.traverse(asyncFunctionVisitor)
        }
      }
    }
  }
}
