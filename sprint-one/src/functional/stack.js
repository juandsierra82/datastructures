var Stack = function(){
  // obejct to return
  var someInstance = {};

  // Use an object with numeric keys to store values
  // do something to fill storage with key val pairs
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    // if (size > 0) {
    //   // delete storage[size - 1];
    //   var temp = {};
    //   for (var key in storage) {
    //     if (key < size - 1) {
    //       temp[key] = storage[key];
    //     }
    //     return temp;
    //   }
    //   storage = temp;
    //   }
    //   size--;
    //   return storage;
    var pop = storage[size -1]
    if(size > 0){
    delete storage[size];
    size --;
  }
  return pop;}


  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
