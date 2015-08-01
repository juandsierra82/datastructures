var Tree = function(value) {
  var newTree = {};
  newTree.value = value; // our root.
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var leaf = Tree(value);
  return this.children.push(leaf);
};

treeMethods.contains = function(target) {
    var parent = this;
    var found = false;
    var traverseKids = function(parent) {
      var branches = parent.children;
      for (var i = 0; i < branches.length; i++) {
        if (branches[i].value === target) {
          found = true;
        } else {
          traverseKids(branches[i])
        }
      }
    }
    traverseKids(parent);
    return found;
  }
  /*
   * Complexity: What is the time complexity of the above functions?
   */
