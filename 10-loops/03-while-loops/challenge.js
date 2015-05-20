module.exports.stream = function(conditionalFn, actionFn){
	while (conditionalFn()){
		actionFn();
	};
};

module.exports.sumNumbers = function(array){
	var total = 0;
	var i = 0;
	
	while (i < array.length){
		total += array[i];
		i++
	};

	return total;
};

