var BinarySearchTree = function(value){
var newTree = Object.create(binaryMethods);
newTree.right = null;
newTree.left = null;
newTree.value = value;

return newTree;
}

var binaryMethods = {

  insert : function(value){
    if(value)
    this.value = BinarySearchTree(value);

  },
  contains : function(value){

  },
  depthFirstLog: function(value){

  }
}

var binaryTree = BinarySearchTree(5);
binaryTree.insert(3);
binaryTree.insert(6);
console.log(binaryTree);



/*
 * Complexity: What is the time complexity of the above functions?
 */
