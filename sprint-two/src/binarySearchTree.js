
var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryMethods);
  newTree.right = null;
  newTree.left = null;
  newTree.value = value;
  return newTree;
}
var binaryMethods = {
  insert: function(val) {
    if (val === this.value) {
      return
    } else if (val > this.value) {
      if (this.right !== null) {
        this.right.insert(val);
      } else {
        this.right = BinarySearchTree(val);
      }
    } else if (val < this.value) {
      if (this.left !== null) {
        this.left.insert(val);
      } else {
        this.left = BinarySearchTree(val);
      }
    }
  },
  contains: function(val) {
    if (this.value === val) {
      return true;
    } else if (this.value < val && this.right !== null) {
      return this.right.contains(val);
    } else if (this.value > val && this.left !== null) {
      return this.left.contains(val);
    }
    return false;
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (!!this.left) {
      this.left.depthFirstLog(cb);
    }
    if (!!this.right) {
      this.right.depthFirstLog(cb);
    }
  }
}
