var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
;

  list.addToTail = function(value){
    // list.added = newNode;
    var newNode = Node(value);
    if(!list.head){ //if theres no nodes in our list
       list.head = newNode;
       list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    console.log(list)
  };

  list.removeHead = function(){
    // list.head.next = null;
    var removed = list.head;
    list.head = removed.next;
    console.log(removed);
    console.log(list);
    return removed.value;
  };

  list.contains = function(target){
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }

      }
            return false;
    }
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
