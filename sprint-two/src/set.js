var Set = function() {
  var set = Object.create(setPrototype);
  set.setStore = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!_.contains(this.setStore, item)) {
    this.setStore.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this.setStore, item)
};

setPrototype.remove = function(item) {
  if (_.contains(this.setStore, item)) {
    this.setStore.splice(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
