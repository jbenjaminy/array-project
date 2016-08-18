var memory = require('./memory');

// Creates array with zero length and pointer to zero blocks of memory
var Array = function() {
	this.length = 0;
	this._capacity = 0;
	this.ptr = memory.allocate(this.length);
};
// Used to calculate the resize; will always allocate 3x as much memory as you need when you go to resize
Array.SIZE_RATIO = 3;

// Push method - O(n): Increases amount of reserved memory and set value of final block
Array.prototype.push = function(value) {
	// resizing to new box at end of array when available memory reaches its capacity
	if (this.length >= this._capacity) {
		this._resize((this.length + 1) * Array.SIZE_RATIO);
	}
	// sets value to the location of this.ptr + this.length
	memory.set(this.ptr + this.length, value);
	this.length++;
}

// Resize method - O(n): copies everything from old location to new, larger chunk of memory at the end of the array, since unlikely that space will be available directly at the end of current location
Array.prototype._resize = function(size) {
	var oldPtr = this.ptr;
	this.ptr = memory.allocate(size);
	if (this.ptr === null) {
		throw new Error('Out of memory');
	}
	memory.copy(this.ptr, oldPtr, this.length);
	memory.free(oldPtr);
	this._capacity = size;
};