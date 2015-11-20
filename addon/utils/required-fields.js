export default function requiredFields(object, listFields, minLength) {
	if (minLength===undefined){
		minLength=0;
	}
	var errors=[];
	listFields.forEach(function (field){
		var data = object.get(field);
		if ( data === undefined || data === null || data.length<=minLength){
			errors.push(field);
		}
	});
	return errors;
}
