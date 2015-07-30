var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var size = 0;

return someInstance;
};

var stackMethods = {

  push : function(value){
    storage[size] = value;
    size++;
  };

  pop : function(){

    var pop = storage[size -1]
    if(size > 0){
    delete storage[size];
    size --;
  }
  return pop;}


  size : function(){
    return size;
  };
};


