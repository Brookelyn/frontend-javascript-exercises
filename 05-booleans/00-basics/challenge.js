module.exports.equalStrings = function(stringOne, stringTwo) {
	return (stringOne == stringTwo);
};

module.exports.notEqual = function(one, two) {
	return (one !== two);
};

module.exports.inBetween = function(lower, middle, upper) {
	return ((lower < middle) && (middle < upper));
};

module.exports.outsideRanges = function(number) {
	return (((number < 2) || (number > 5)) && (number < 10 || 20 < number) && (number <= 42 || 75 < number));
};

module.exports.outsideRanges = function(number) {	
	return (((number < 2) || (number > 5)) && (number < 10 || 20 < number) && (number <= 42 || 75 < number));
};

module.exports.nameAndPrice = function(name, price) {
	return ( (name === "NYTimes" || name === "LATimes") && (price >= 1));
};