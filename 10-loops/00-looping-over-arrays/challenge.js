module.exports.sumNumbers = function(array){
	var total = 0;
	
	for(var i = 0; i < array.length; i++){
		total += array[i];
	}

	return total;	
};

module.exports.splitAndLowerCaseString = function(inputString){
	var lower = inputString.toLowerCase();
	var array = lower.split(",");
	
	return array;
};

module.exports.addIndex = function(input){
  var newArray = [];
  
  for (var i = 0; i < input.length; i++){
    newArray[i] = i + " is " + input[i];
  }
  
  return newArray;
};


