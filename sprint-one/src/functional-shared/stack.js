var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // // var obj = Stack.bind(stackMethods);
    var stack = {};
// USE UNDERSCORE EXTEND!!!

stack.storage = {};
stack.size = 0;

  // var extend = function (object) {
  //   var len = arguments.length;
  //   for (var i = 0; i < len; i++) {
  //     for (var prop in arguments[i]) {
  //       object[prop] = arguments[i][prop];
  //     }
  //   }
  //   return object;
  // }





// stack.push = stackMethods.push;
// stack.pop = stackMethods.pop;
// stack.size = stackMethods.size;

stack = extend(stack, stackMethods);

return stack;




};

var stackMethods =  {



  push : function(value){
    this.storage[this.size] = value;
    this.size++;
  },

  pop : function(){

    var pop = this.storage[this.size -1]
    if(this.size > 0){
    delete this.storage[this.size];
    this.size --;
  }
  return pop;},


  size : function(){
    return this.size;
  }
};


