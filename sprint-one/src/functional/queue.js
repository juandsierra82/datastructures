var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    size++;
    index++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[first];

    if( size > 0 ) {
      size && size --;
      delete storage[first];
      first++;
  }
      return dequeued;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
