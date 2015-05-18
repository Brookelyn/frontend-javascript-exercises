module.exports.newArray = function(a, b, c, d) {
	newArray = [a, b, c, d]
	return newArray;
};

module.exports.firstAndLast = function(array){
	var first = array.shift();
	var last = array.pop();
	var newArray = [first, last];

	return newArray;
};