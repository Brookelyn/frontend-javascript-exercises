module.exports.getKeys = function(object){
	 return Object.keys(object);
};

module.exports.getValues = function(object){
	var newArray = [];

	for(var property in object){
    	newArray.push(object[property]);
	}
  
	return newArray;
};

module.exports.objectToArray = function(object){
	var newArray = [];

	for(var property in object){
		newArray.push(property + " is " + object[property]);
	}

	return newArray;
};