

var Graph = function(){
  // var index = 0;
  this.nodes = {};
  this.edges = {};
  this.nodes.pointer = null;

};

Graph.prototype.addNode = function(node){
  if(!this.nodes.pointer){
    this.nodes.pointer = node;

  }



};

   // debugger;


Graph.prototype.contains = function(node){

}
Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

//    this.bucket = [];
//    if(this.bucket.length < 2) {
//    this.bucket.push(node);
//    }
//    else{
//     this.index = this.bucket;
//     index++;
//    }

// }
}

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



