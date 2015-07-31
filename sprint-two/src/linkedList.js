var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  var current;
  // list.newNode = Node(value);

  list.addToTail = function(value){
    // list.added = newNode;
    var newNode = Node(value);
    if(list.size === 0){ //if theres no nodes in our list
       list.head = newNode;
       list.tail = list.head;
       current = newNode
    } else {
      list.head.next = newNode;
      list.tail = newNode;
      current = list.head;
    }
    console.log(list)
    list.size++;
  };

  list.removeHead = function(){
    // list.head.next = null;
    var removed = list.head.value;
    list.head = current.next;
    console.log(removed);
    console.log(list);
    return removed;
  };

  list.contains = function(target){

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
