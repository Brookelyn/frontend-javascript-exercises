module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
	var course = {
		title: courseTitle,
		duration: courseDuration,
		students: courseStudents
	};
	return course;
};

module.exports.addProperty = function(object, newProp, newValue){
	if (object.hasOwnProperty(newProp)) {
		return object;
	}
	else{
		object[newProp] = newValue;
		return object;
	}
};

module.exports.formLetter = function(letter){
	return ("Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\n" + "Sincerely,\n" + letter.sender);
};

module.exports.canIGet = function(item, money){
	var apple = {
		'MacBook Air': 999,
		'MacBook Pro': 1299,
		'Mac Pro': 2499,
		'Apple Sticker': 1
	};
		
	return apple[item] <= money;	
};