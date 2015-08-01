
var Graph = function(){
  // var index = 0;
  // this.index = 0;
this.nodes = {};
  // this.nodes.bucket = [];
  // this.nodes[this.index] = [];
  // this.nodes.node = {};
  this.edges = {};
  this.index = 0;
  this.edges.names = [];
};

Graph.prototype.addNode = function(node){

this.nodes[node] = node;

};

   // debugger;


Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
}

Graph.prototype.removeNode = function(node){
  if (_.contains(this.nodes, node)) {
    delete this.nodes[node];
    for(var i = 0; i<this.edges.names.length; i++){
      if(this.edges.names[i].indexOf(node) > -1) {
        delete this.edges.names[i];
      }
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var args = Array.prototype.slice.call(arguments)
  var target = args.join(',')
  return _.contains(this.edges.names, target);
};

Graph.prototype.addEdge = function(fromNode, toNode){
   this.edges[this.index] = [];

  if (this.nodes[fromNode] && this.nodes[toNode] && fromNode !== toNode) {
    this.edges[this.index].push(fromNode);
    this.edges[this.index].push(toNode);
  }
this.edges.names.push(this.edges[this.index].join(','));

  this.index++;
}

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.names.length; i++) {
    if(this.edges.names[i].indexOf(fromNode) > -1 && this.edges.names[i].indexOf(toNode) > -1) {
      delete this.edges.names[i];
      delete this.edges[i];
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  return _.map(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //TEST:
var obj = new Graph();
obj.addNode('cat');
obj.addNode('dog');
obj.addNode('pig');

obj.addEdge('cat', 'dog');
obj.addEdge('dog', 'pig');
obj.addEdge('cat', 'pig');

console.log(obj);



