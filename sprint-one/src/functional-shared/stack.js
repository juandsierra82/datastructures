var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // // var obj = Stack.bind(stackMethods);
    var stack = {

}

    stack.storage = {};
    stack.theSize = 0;
  _.extend(stack, stackMethods);

return stack;

};

var stackMethods =  {};

    stackMethods.push = function(value){
    this.storage[this.theSize] = value;
    this.theSize++;
    };

  stackMethods.pop = function(){

    var pop = this.storage[this.theSize -1]
    if(this.theSize > 0){
    delete this.storage[this.theSize];
    this.theSize --;
    }
    return pop;
  };


  stackMethods.size = function(){
  return this.theSize;
  };






