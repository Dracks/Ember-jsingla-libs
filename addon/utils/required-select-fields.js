export default function requiredSelectFields(object, listFields) {
	var errors=[];
	listFields.forEach(function (field){
		var data = object.get(field);
		if ( data === undefined || data === null || data.get('id')===undefined){
			errors.push(field);
		}
	});
	return errors;
}
