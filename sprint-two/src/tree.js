var Tree = function(value){
  var newTree = {};
  newTree.value = value; // our root.

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree,treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var leaf = Tree(value);
  return this.children.push(leaf);


};

treeMethods.contains = function(target){
   var traverseKids = function (tree){
     var branches = tree.children;
   if(branches.length === 0){return false}
   else{
     for(var i = 0; i<branches.length; i++){
       if(branches[i] === target){return true}
     else{return traverseKids(branches.children[i])}
   }
   }
 }
 traverseKids(leaf);
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
