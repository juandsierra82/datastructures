var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.theSize = 0;
  this.index = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.index] = value;
    this.theSize++;
    this.index++;
  };

Queue.prototype.dequeue = function(){
    var dequeued = this.storage[this.first];

    if( this.theSize > 0 ) {
      this.theSize && this.theSize --;
      delete this.storage[this.first];
      this.first++;
  }
  return dequeued
};

Queue.prototype.size = function(){
    return this.theSize;
  };
