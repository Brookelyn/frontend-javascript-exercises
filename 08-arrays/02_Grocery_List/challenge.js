module.exports.addItem = function(item, array){
	var check = array.indexOf(item);

	if (check == -1){
		array.push(item);
		return array;
	}
	else {
		return array;
	}
};

module.exports.reverseSortedList = function(array){
	array.sort();
	var newArray = array.reverse();
	return newArray;
};