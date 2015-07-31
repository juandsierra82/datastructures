var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = Object.create(queueMethods);

  obj.storage = {};
  obj.theSize = 0;
  obj.index = 0;
  obj.first = 0;
 return obj;
};

var queueMethods = {

enqueue : function(value){
    this.storage[this.index] = value;
    this.theSize++;
    this.index++;
  },

dequeue : function(){
    var dequeued = this.storage[this.first];

    if( this.theSize > 0 ) {
      this.theSize && this.theSize --;
      delete this.storage[this.first];
      this.first++;
  }
      return dequeued;
  },
size : function(){
    return this.theSize;
  }
}



