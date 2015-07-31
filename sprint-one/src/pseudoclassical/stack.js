var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.theSize = 0;

};

Stack.prototype.push = function(value){
    this.storage[this.theSize] = value;
    this.theSize++;
    };

 Stack.prototype.pop = function(){

    var pop = this.storage[this.theSize -1]
    if(this.theSize > 0){
    delete this.storage[this.theSize];
    this.theSize --;
    }
    return pop;
  };

Stack.prototype.size = function(){
  return this.theSize;
  };




